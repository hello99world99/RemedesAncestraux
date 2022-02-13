import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { User } from 'src/environments/models';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  public signInWithPhone(data: any){
    this.auth.languageCode = 'fr';
    console.log(data.value);
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        console.log('Response : ', response);
        this.user.displayName = data.value.firstName+' '+data.value.lastName;
        this.user.phoneNumber = data.value.phone;
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

  public async checkConfirmationCode(data: any){
    this.confirmationResult.confirm(data.value.code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      this.setCurrentUser(this.auth.currentUser);
      const docRef = doc(this.db, '/Users/', user.uid);
      const snapDoc = getDoc(docRef);
      if (!snapDoc){
        setDoc(
          doc(this.db, 'Users', user.uid), {
            displayName: this.user.displayName,
            phoneNumber: this.user.phoneNumber
          }
        );
        console.log(this.user);
      }
      this.router.navigateByUrl('/');
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log('Error: ', error);
    });
  }

  public setCurrentUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }

}
