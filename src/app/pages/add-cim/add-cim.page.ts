/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-add-cim',
  templateUrl: './add-cim.page.html',
  styleUrls: ['./add-cim.page.scss'],
})
export class AddCimPage implements OnInit {

  constructor(
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  public chooseImage() {
    const inputImage = document.getElementById('inputImage');
    inputImage.click();
  }

  public chooseAudio() {
    const inputAudio = document.getElementById('inputAudio');
    inputAudio.click();
  }

  public async addCIM(data: any) {
    const inputImage = document.getElementById('inputImage');
    const inputAudio = document.getElementById('inputAudio');
    const image = inputImage['files'][0];
    const audio = inputAudio['files'][0];
    if (data.valid && image && audio) {
      this.appService.presentLoadingDefault('Ajout du CIM, veuillez patienter...');
      const audioPath = `Files/audio/cim/${audio.name}`;
      const newAudioRef = ref(getStorage(), audioPath);
      const audioSnapshot = await uploadBytesResumable(newAudioRef, audio);
      const publicAudioUrl = await getDownloadURL(newAudioRef);

      const imagePath = `Files/images/cim/${image.name}`;
      const newImageRef = ref(getStorage(), imagePath);
      const imageSnapshot = await uploadBytesResumable(newImageRef, image);
      const publicImageUrl = await getDownloadURL(newImageRef);

      const docRef = await addDoc(collection(getFirestore(), 'CIM'),
        {
          chapitre: 99,
          title: data.value.title,
          image: publicImageUrl,
          audio: publicAudioUrl,
          state: 'activated'
        }
      );
      data.reset();
      this.appService.dismissLoading();
      this.appService.presentToast('CIM ajouté avec succèss', 'light');
    } else {
      this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
    }
  }

}
