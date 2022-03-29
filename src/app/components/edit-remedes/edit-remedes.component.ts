/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { collection, doc, DocumentData, DocumentSnapshot, getDocs, getFirestore, orderBy, query, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { PharmaServiceService } from '../../services/pharma-service.service';

@Component({
  selector: 'app-edit-remedes',
  templateUrl: './edit-remedes.component.html',
  styleUrls: ['./edit-remedes.component.scss'],
})
export class EditRemedesComponent implements OnInit {

  @Input() uid: string;
  public remedy: DocumentSnapshot<DocumentData>;
  public cimList: any[] = [];
  public children: any[] = [];
  public cimSelected: string;
  public illnessSelected: string;
  public image: any;
  public audio: any;
  private cim: string;
  private child: string;
  constructor(
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService,
    private modalController: ModalController,
    private router: Router
  ) { }

  async ngOnInit() {
    this.appService.presentLoadingDefault('Veuillez patienter...');
    this.remedy = await this.pharmaService.getActivatedRemedy(this.uid);
    this.cim = this.remedy.get('cim');
    this.child = this.remedy.get('children');
    this.getCim();
    this.cimSelected = await this.getCimValue(this.cim);
    this.illnessSelected = await this.getChildValue(this.cim, this.child);

    const imageInput = document.getElementById('imageInput');
    const imageBtn = document.getElementById('imageBtn');

    imageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      imageInput.click();
    });

    const audioInput = document.getElementById('audioInput');
    const audioBtn = document.getElementById('audioBtn');
    audioBtn.addEventListener('click', (e) => {
      e.preventDefault();
      audioInput.click();
    });

    imageInput.addEventListener('change', (e: Event) => {
      this.uploadImage(e.target['files'][0]);
    });

    audioInput.addEventListener('change', (e: Event) => {
      this.uploadAudio(e.target['files'][0]);
    });
  }

  public async getCimValue(uid: string) {
    const result = await this.appService.getCIM(uid);
    return result.get('title');
  }

  public async getChildValue(cim: string, child: string) {
    const result = await this.appService.getChild(cim, child);
    return result.get('title');
  }

  public async getCim() {
    const q = query(collection(getFirestore(), 'CIM'), orderBy('chapitre'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      this.cimList.push([data.id, data.data()]);
    });
    this.appService.dismissLoading();
  }

  public async cimChanged(data: any) {
    this.cim = null;
    this.child = null;
    this.cimSelected = await this.getCimValue(data.value.cim);
    const child = document.getElementById('child');
    child.setAttribute('value', '');
    this.appService.presentLoadingDefault('Veuillez patienter...');
    this.getChildren(data.value.cim);
  }

  public async childChanged(data: any) {
    this.illnessSelected = await this.getChildValue(data.value.cim, data.value.child);
  }

  public async getChildren(uid: string) {
    this.children = [];
    const q = query(collection(getFirestore(), `CIM/${uid}/Children`), orderBy('chapitre'));
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((document) => {
      this.children.push([document.id, document.data()]);
    });
    this.appService.dismissLoading();
  }

  public async uploadImage(image: File) {
    this.appService.presentLoadingDefault('Veuillez patienter...');
    const imagePath = `Pharmacopees/${getAuth().currentUser.uid}/Files/images/${image.name}`;
    const newImageRef = ref(getStorage(), imagePath);
    const imageSnapshot = await uploadBytesResumable(newImageRef, image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    await updateDoc(doc(getFirestore(), `Remedes/${this.remedy.id}`),
      {
        image: publicImageUrl
      }
    );
    this.remedy = await this.pharmaService.getActivatedRemedy(this.uid);
    this.appService.dismissLoading();
  }

  public async uploadAudio(audio: File) {
    this.appService.presentLoadingDefault('Veuillez patienter...');
    const audioPath = `Pharmacopees/${getAuth().currentUser.uid}/Files/audio/${audio.name}`;
    const newAudioRef = ref(getStorage(), audioPath);
    const audioSnapshot = await uploadBytesResumable(newAudioRef, audio);
    const publicAudioUrl = await getDownloadURL(newAudioRef);
    updateDoc(doc(getFirestore(), `Remedes/${this.remedy.id}`),
      {
        audio: publicAudioUrl
      }
    );
    this.remedy = await this.pharmaService.getActivatedRemedy(this.uid);
    this.appService.dismissLoading();
  }

  public async editRemedy(data: any) {
    if (this.cim && this.child) {
      data.value.cim = this.cim;
      data.value.children = this.child;
    }
    const cim = data.value.cim;
    const child = data.value.children;
    if (
      data.value.cim &&
      data.value.children &&
      data.value.nom &&
      data.value.description
    ) {
      this.appService.presentLoadingDefault('Ajout du remède en cours, veuillez patienter...');

      await updateDoc(doc(getFirestore(), `Remedes/${this.remedy.id}`),
        data.value
      );
      this.appService.dismissLoading();
      this.appService.presentToast('Mise en jour effectuée avec success', 'light');
    } else {
      this.appService.presentToast('Veuillez renseigner correctement tous champs', 'danger');
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
