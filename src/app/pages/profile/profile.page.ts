/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { doc, DocumentData, DocumentSnapshot, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentUser: DocumentSnapshot<DocumentData>;
  constructor(
    private appService: RemedeServiceService,
    private app: AppComponent
  ) { }

  async ngOnInit() {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      this.currentUser = await this.appService.getUser(currentUser.uid);
    }
    const imageInput = document.getElementById('imagePicker');
    const imageButtonElement = document.getElementById('submitImage');
    imageButtonElement.addEventListener('click', () => {
      imageInput.click();
    });
    imageInput.addEventListener('change', (e) => {
      this.updateImage(e.target['files'][0]);
    });
    this.appService.dismissLoading();
  }

  public async updateImage(image: File) {
    this.appService.presentLoadingDefault('Chargement de l\'image, veuillez patienter...');
    const filePath = `Files/images/profile/${getAuth().currentUser.uid}/${image.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    await updateDoc(doc(getFirestore(), `Users/${getAuth().currentUser.uid}`),
      {
        photoURL: publicImageUrl
      }
    );
    this.app.ngOnInit();
    this.appService.dismissLoading();
    this.currentUser = await this.appService.getUser(this.currentUser.id);
  };

  public async updateUser(data: any) {
    if (data.valid) {
      await updateDoc(doc(getFirestore(), `Users/${getAuth().currentUser.uid}`),
        {
          displayName: data.value.displayName
        }
      );
      this.app.ngOnInit();
      this.appService.presentToast('Mise en jour effectuée avec success', 'light');
    } else {
      this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
    }
  };

}
