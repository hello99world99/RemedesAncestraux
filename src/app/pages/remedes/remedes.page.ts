/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-remedes',
  templateUrl: './remedes.page.html',
  styleUrls: ['./remedes.page.scss'],
})
export class RemedesPage implements OnInit {

  public cimList: any[] = [];
  public children: any[] = [];
  public cimSelected: string;
  public illnessSelected: string;
  public image: any;
  public audio: any;
  private db = getFirestore();
  private loading: any;
  constructor(
    private loadingCtrl: LoadingController,
    private appService: RemedeServiceService
  ) { }

  ngOnInit() {
    this.presentLoadingDefault('Veuillez patienter...');
    this.getCim();

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

  }

  public async getCim() {
    const q = query(collection(this.db, 'CIM'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((cim) => {
      const id = cim.id;
      const result = [
        id, cim.data()
      ];
      this.cimList.push(result);
    });
    this.loading.dismiss();
  }

  public cimChanged(data: any) {
    const convert = data.value.cim.split('@');
    this.cimSelected = convert[1];
    const child = document.getElementById('child');
    child.setAttribute('value', '');
    this.presentLoadingDefault('Veuillez patienter...');
    this.getChildren(convert[0]);
  }

  public childChanged(data: any) {
    const convert = data.value.child.split('@');
    this.illnessSelected = convert[1];
  }

  public async getChildren(uid: string) {
    this.children = [];
    const querySnapshot = await getDocs(
      collection(this.db, 'CIM/' + uid + '/Children')
    );
    await querySnapshot.forEach((document) => {
      const id = document.id;
      const result = [
        id, document.data()
      ];
      this.children.push(result);
    });
    this.loading.dismiss();
  }

  public async addRemede(data: any) {
    if (data.valid) {
      this.presentLoadingDefault('Ajout du remède en cours, veuillez patienter...');
      const cim = data.value.cim.split('@')[0];
      const child = data.value.child.split('@')[0];
      const imageInput = document.getElementById('imageInput');
      const audioInput = document.getElementById('audioInput');
      const docRef = await addDoc(collection(getFirestore(), `CIM/${cim}/Children/${child}/Remedes`),
        {
          pharmacopee: getAuth().currentUser.uid,
          cim: cim,
          children: child,
          nom: data.value.nom,
          description: data.value.description,
          state: 'activated',
          likes: [],
          dislikes: [],
          created: Timestamp.now()
        }
      );
        await setDoc(doc(getFirestore(), `Pharmacopees/${getAuth().currentUser.uid}/Remedes/${docRef.id}`),
        {
          cim: cim,
          children: child,
          created: Timestamp.now()
        }
        );

      const imagePath = `Pharmacopees/${getAuth().currentUser.uid}/Files/${imageInput['files'][0].name}`;
      const newImageRef = ref(getStorage(), imagePath);
      const imageSnapshot = await uploadBytesResumable(newImageRef, imageInput['files'][0]).then(async (state) => {
        const publicImageUrl = await getDownloadURL(newImageRef);
        await setDoc(doc(getFirestore(), `/CIM/${cim}/Children/${child}/Remedes/${docRef.id}`),
          {
            image: publicImageUrl
          },
          { merge: true });
      });
      const audioPath = `Pharmacopees/${getAuth().currentUser.uid}/Files/${audioInput['files'][0].name}`;
      const newAudioRef = ref(getStorage(), audioPath);
      const audioSnapshot = await uploadBytesResumable(newAudioRef, audioInput['files'][0]).then(async (state) => {
        const publicAudioUrl = await getDownloadURL(newAudioRef);
        await setDoc(doc(getFirestore(), `CIM/${cim}/Children/${child}/Remedes/${docRef.id}`),
          {
            audio: publicAudioUrl
          },
          { merge: true }
        );
      });
      this.appService.presentToast('Remèdes ajouté avec succèss', 'light');
      data.reset();
      this.loading.dismiss();
    } else {
      this.appService.presentToast('Veuillez renseigner tous champs', 'danger');
    }
  }

  public async presentLoadingDefault(infos: string) {
    this.loading = await this.loadingCtrl.create({
      message: infos,
    });
    await this.loading.present();
  }

}
