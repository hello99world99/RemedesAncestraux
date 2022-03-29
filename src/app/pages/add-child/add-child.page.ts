/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addDoc, collection, doc, DocumentData, DocumentSnapshot, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.page.html',
  styleUrls: ['./add-child.page.scss'],
})

export class AddChildPage implements OnInit {

  public cim: DocumentSnapshot<DocumentData>;
  private uid: string;
  constructor(
    private appService: RemedeServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.uid = this.activeRoute.snapshot.paramMap.get('uid');
    this.cim = await this.appService.getCIM(this.uid);
  }

  public chooseImage() {
    const inputImage = document.getElementById('inputImage');
    inputImage.click();
  }

  public chooseAudio() {
    const inputAudio = document.getElementById('inputAudio');
    inputAudio.click();
  }

  public async addChild(data: any) {
    const inputImage = document.getElementById('inputImage');
    const inputAudio = document.getElementById('inputAudio');
    const image = inputImage['files'][0];
    const audio = inputAudio['files'][0];
    console.log(data.value);
    console.log(image, audio);
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

      await addDoc(collection(getFirestore(), `CIM/${this.uid}/Children`),
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
      this.appService.presentToast('Maladie ajoutée avec succèss', 'light');
      this.router.navigate(['cim-content', {
        uid: this.uid
      }]);
    } else {
      this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
    }
  }
}
