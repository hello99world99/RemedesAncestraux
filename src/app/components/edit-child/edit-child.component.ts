/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { addDoc, collection, doc, DocumentData, DocumentSnapshot, getFirestore, QuerySnapshot, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.scss'],
})
export class EditChildComponent implements OnInit {

  @Input() cim: string;
  @Input() uid: string;
  public child: DocumentSnapshot<DocumentData>;
  constructor(
    private appService: RemedeServiceService,
    public modalController: ModalController,
    private router: Router
  ) { }

  async ngOnInit() {
    this.child = await this.appService.getChild(this.cim, this.uid);
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

  public async updateImage(image: File) {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    const imagePath = `Files/images/cim/${image.name}`;
    const newImageRef = ref(getStorage(), imagePath);
    const imageSnapshot = await uploadBytesResumable(newImageRef, image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    await updateDoc(doc(getFirestore(), `CIM/${this.cim}/Children/${this.uid}`),
      {
        image: publicImageUrl,
      }
    );
    this.child = await this.appService.getChild(this.cim, this.uid);
    this.appService.dismissLoading();
  }

  public async updateAudio(audio: File) {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    const audioPath = `Files/audio/cim/${audio.name}`;
    const newAudioRef = ref(getStorage(), audioPath);
    const audioSnapshot = await uploadBytesResumable(newAudioRef, audio);
    const publicAudioUrl = await getDownloadURL(newAudioRef);
    await updateDoc(doc(getFirestore(), `CIM/${this.cim}/Children/${this.uid}`),
      {
        audio: publicAudioUrl,
      }
    );
    this.child = await this.appService.getChild(this.cim, this.uid);
    this.appService.dismissLoading();
  }

  public async editChild(data: any) {
    if (data.valid) {
      this.appService.presentLoadingDefault('Mise en jour de la maladie, veuillez patienter...');

      await updateDoc(doc(getFirestore(), `CIM/${this.cim}/Children/${this.uid}`),
        {
          chapitre: data.value.chapitre,
          title: data.value.title,
          description: data.value.description,
        }
      );
      data.reset();
      this.appService.dismissLoading();
      this.appService.presentToast('Mise en jour de la maladie effectuée avec succèss', 'light');
      // this.router.navigate(['cim-content', {
      //   uid: this.uid
      // }]);
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
