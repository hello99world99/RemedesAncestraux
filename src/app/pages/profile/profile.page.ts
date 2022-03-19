/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
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
  constructor(
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    this.getUser();
    const imageInput = document.getElementById('imagePicker');
    const imageButtonElement = document.getElementById('submitImage');
    imageButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      imageInput.click();
    });
    imageInput.addEventListener('change', this.takePicture);
  }

  public async getUser() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(getFirestore(), '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
    this.appService.dismissLoading();
  }

  public async takePicture(event: Event) {
    event.preventDefault();
    const imageInput = document.getElementById('imagePicker');
    const image = imageInput['files'][0];
    const filePath = `Files/images/profile/${getAuth().currentUser.uid}/${image.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    await updateDoc(doc(getFirestore(), `Users/${getAuth().currentUser.uid}`),
      {
        photoURL: publicImageUrl
      }
    ).then(result => {
      // this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      //   this.router.navigate(['profile']));
      this.appService.presentToast('Mise en jour effectuée avec success', 'light');
    }).catch((error) => {
      console.log(error);
      // this.presentToast('Erreur..., veuillez réessayer', 'danger');
    }
    );
  };

  public async updateUser(data: any) {
    if (data.valid){
      await updateDoc(doc(getFirestore(), `Users/${getAuth().currentUser.uid}`),
        {
          displayName: data.value.displayName
        }
      );
      this.appService.presentToast('Mise en jour effectuée avec success', 'light');
    }else{
      this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
    }
  };

}
