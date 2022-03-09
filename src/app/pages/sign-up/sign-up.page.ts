import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { getDoc, getFirestore, setDoc, Timestamp, collection } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { User } from 'src/environments/models';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public confirmationResult: any;
  private auth = getAuth();
  private recaptchaVerifier: any;
  private user = new User();
  private db = getFirestore();
  constructor(
    private appService: RemedeServiceService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public signInWithPhone(data: any) {
    this.auth.languageCode = 'fr';
    console.log(data.value);
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        console.log('Response : ', response);
        this.user.displayName = data.value.firstName + ' ' + data.value.lastName;
        this.user.userName = data.value.phone;
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
      'expired-callback': (error) => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.log('Expire error : ', error);
      }
    }, this.auth);

    signInWithPhoneNumber(this.auth, data.value.phone, this.recaptchaVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        console.log('confirmation result : ', this.confirmationResult);
      }).catch((error) => {
        // Error; SMS not sent
        console.log('SMS not sent : ', error);
      });
  }

  public async checkConfirmationCode(data: any) {
    this.confirmationResult.confirm(data.value.code).then(async (result) => {
      // User signed in successfully.
      const user = result.user;
      this.presentToast();
      this.setCurrentUser(user);
      const docRef = doc(this.db, `${user.uid}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        console.log('Bienvenue');
      } else {
        setDoc(
          doc(this.db, 'Users', user.uid), {
          displayName: this.user.displayName,
          userName: this.user.userName,
          photoURL: this.user.photoURL,
          state: this.user.state,
          created: Timestamp.now()
        }, { merge: true }
        );
      }
      this.router.navigateByUrl('/');
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log('Error : ', error);
    });
  }

  public setCurrentUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public async presentToast() {
    const toast = await this.toastCtrl.create({
      message: `Bienvenu ${this.auth.currentUser.displayName}`,
      position: 'top',
      color: 'light',
      duration: 3130
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
