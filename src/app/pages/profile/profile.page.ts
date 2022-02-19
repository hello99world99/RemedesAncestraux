import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentUser: any;
  private db = getFirestore();
  private loading: any;
  private image: any;
  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoadingDefault();
    this.getUser();
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

  public async takePicture() {
    this.image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    const imageUrl = this.image.webPath;
    // Can be set to the src of an image now
    this.currentUser.photoURL = imageUrl;
  };

  public updateUser(data: any) {
    this.updateUserInfo(data.value, this.image);
  }

  public updateUserInfo(data: any, file: any) {
    const storage = getStorage();
    console.log('Data : ', data);
    console.log('File webPath : ', file.webPath);
    console.log('File format : ', file.format);
    const storageRef = ref(storage, 'Files/images/'+file.webPath);
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, this.currentUser.photoURL).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    }).catch((error)=>{
      console.log('Error => : ', error);
    });
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Veuillez patienter...</span>',
    });
    await this.loading.present();
  }

}
