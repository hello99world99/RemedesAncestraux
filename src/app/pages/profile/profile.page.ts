import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

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
  private savedFile: any;
  constructor(
    private loadingCtrl: LoadingController,
    private appService: RemedeServiceService
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
      saveToGallery: true,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    const imageUrl = this.image.webPath;
    // Can be set to the src of an image now
    this.currentUser.photoURL = imageUrl;
  };

  public updateUser(data: any) {
    console.log('Data : ', data.value);
    console.log('Picture : ', this.image);
    this.appService.saveImageMessage(data.value, this.image.webPath);
  }

  public updateUserInfo(data: any, photo: Photo) {
    this.savePicture(photo);
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Veuillez patienter...</span>',
    });
    await this.loading.present();
  }

  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);
    console.log('Base64 data: ', base64Data);
    // Write the file to the data directory
    const fileName = new Date().getTime() +'.'+photo.format;
    this.savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    console.log('Saved file : ' + this.savedFile.uri);

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
