import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentUser: any;
  private db = getFirestore();
  private loading: any;
  private image: File;
  constructor(
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.presentLoadingDefault();
    this.getUser();
    const btn = document.getElementById('imagePicker');
    const imageButtonElement = document.getElementById('submitImage');
    imageButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      btn.click();
    });
    btn.addEventListener('change', this.takePicture);
    this.presentToast('Mise en jour effectuée avec success', 'light');
  }

  public async getUser() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(this.db, '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
    this.loading.dismiss();
  }

  public async takePicture(event) {
    event.preventDefault();
    this.image = event.target.files[0];
    const filePath = `Files/images/profile/${getAuth().currentUser.uid}/${this.image.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, this.image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    setDoc(doc(getFirestore(), `Users/${getAuth().currentUser.uid}`),
      {
        photoURL: publicImageUrl
      },
      {
        merge: true
      }
    ).then(result => {
      // this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      //   this.router.navigate(['profile']));
      this.presentToast('Mise en jour effectuée avec success', 'light');
    }).catch((error) => {
      console.log(error);
      // this.presentToast('Erreur..., veuillez réessayer', 'danger');
    }
    );
  };

  public async updateUser(data: any) {
    setDoc(doc(getFirestore(), `Users/${getAuth().currentUser.uid}`),
      {
        displayName: data.value.displayName
      },
      {
        merge: true
      }
    );
  };

  public async presentToast(infos: string, state: string) {
    const toast = await this.toastCtrl.create({
      message: infos,
      position: 'top',
      color: state,
      duration: 3130
    });
    await toast.present();
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Veuillez patienter...</span>',
    });
    await this.loading.present();
  }

}
