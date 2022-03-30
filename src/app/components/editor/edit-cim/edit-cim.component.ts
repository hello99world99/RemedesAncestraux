/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { addDoc, collection, doc, DocumentData, DocumentSnapshot, getFirestore, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-edit-cim',
  templateUrl: './edit-cim.component.html',
  styleUrls: ['./edit-cim.component.scss'],
})
export class EditCimComponent implements OnInit {

  @Input() uid: string;
  public cim: DocumentSnapshot<DocumentData>;
  constructor(
    private appService: RemedeServiceService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.cim = await await this.appService.getCIM(this.uid);
  }

  public chooseImage() {
    const inputImage = document.getElementById('inputImage');
    inputImage.click();
    inputImage.addEventListener('change', (e) => {
      this.updateImage(e.target['files'][0]);
    });
  }

  public chooseAudio() {
    const inputAudio = document.getElementById('inputAudio');
    inputAudio.click();
    inputAudio.addEventListener('change', (e) => {
      this.updateAudio(e.target['files'][0]);
    });
  }

  public async updateImage(file: File) {
    this.appService.presentLoadingDefault('Chargement...');
    const imagePath = `Files/images/cim/${file.name}`;
    const newImageRef = ref(getStorage(), imagePath);
    const imageSnapshot = await uploadBytesResumable(newImageRef, file);
    const publicImageUrl = await getDownloadURL(newImageRef);
    const docRef = await updateDoc(doc(getFirestore(), `CIM/${this.cim.id}`),
      {
        image: publicImageUrl
      }
    );
    this.cim = await await this.appService.getCIM(this.uid);
    this.appService.dismissLoading();
  }

  public async updateAudio(file: File) {
    this.appService.presentLoadingDefault('Chargement...');
    const audioPath = `Files/audio/cim/${file.name}`;
    const newAudioRef = ref(getStorage(), audioPath);
    const audioSnapshot = await uploadBytesResumable(newAudioRef, file);
    const publicAudioUrl = await getDownloadURL(newAudioRef);
    const docRef = await updateDoc(doc(getFirestore(), `CIM/${this.cim.id}`),
      {
        audio: publicAudioUrl
      }
    );
    this.cim = await await this.appService.getCIM(this.uid);
    this.appService.dismissLoading();
  }

  public async updateCIM(data: any) {
    if (data.valid) {
      this.appService.presentLoadingDefault('Ajout du CIM, veuillez patienter...');

      const docRef = await updateDoc(doc(getFirestore(), `CIM/${this.cim.id}`),
        {
          title: data.value.title,
          chapitre: data.value.chapitre
        }
      );
      this.cim = await await this.appService.getCIM(this.uid);
      this.appService.dismissLoading();
      this.appService.presentToast('CIM mise à jour avec succèss', 'light');
    } else {
      this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
    }
  }

  public async modalDismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
