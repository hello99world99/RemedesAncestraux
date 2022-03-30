/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { ActivatedRoute } from '@angular/router';
import { PharmaServiceService } from '../../services/pharma-service.service';

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
  public ref: string[];
  private cim: string;
  private child: string;
  constructor(
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService,
    private activeRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.appService.presentLoadingDefault('Veuillez patienter...');
    this.getCim();

    try {
      this.ref = JSON.parse(this.activeRoute.snapshot.paramMap.get('ref'));
      this.cimSelected = await this.getCimValue(this.ref[0]);
      this.illnessSelected = await this.getChildValue(this.ref[0], this.ref[1]);
      this.cim = this.ref[0];
      this.child = this.ref[1];
    } catch (error) {}

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

  public async getCimValue(uid: string) {
    const docRef = getDoc(doc(getFirestore(), `CIM/${uid}`));
    const result = (await docRef).data();
    return result.title;
  }

  public async getChildValue(cim: string, child: string) {
    const docRef = getDoc(doc(getFirestore(), `CIM/${cim}/Children/${child}`));
    const result = (await docRef).data();
    return result.title;
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
    this.cim = null;
    this.child = null;
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

  public async addRemede(data: any) {
    if (this.cim && this.child){
      data.value.cim = this.cim;
      data.value.child = this.child;
    }
    const cim = data.value.cim;
    const child = data.value.child;
    const imageInput = document.getElementById('imageInput');
    const audioInput = document.getElementById('audioInput');
    const image = imageInput['files'][0];
    const audio = audioInput['files'][0];
    console.log('Data : ', data.value);
    if (
      data.value.cim &&
      data.value.child &&
      data.value.nom &&
      data.value.description &&
      image && audio) {
      this.appService.presentLoadingDefault('Ajout du remède en cours, veuillez patienter...');

      const imagePath = `Pharmacopees/${getAuth().currentUser.uid}/Files/images/${image.name}`;
      const newImageRef = ref(getStorage(), imagePath);
      const imageSnapshot = await uploadBytesResumable(newImageRef, image);
      const publicImageUrl = await getDownloadURL(newImageRef);

      const audioPath = `Pharmacopees/${getAuth().currentUser.uid}/Files/audio/${audio.name}`;
      const newAudioRef = ref(getStorage(), audioPath);
      const audioSnapshot = await uploadBytesResumable(newAudioRef, audio);
      const publicAudioUrl = await getDownloadURL(newAudioRef);

      const pharma = await this.pharmaService.getPharma(getAuth().currentUser.uid);

      const docRef = await addDoc(collection(getFirestore(), 'Remedes'),
        {
          pharmacopee: getAuth().currentUser.uid,
          cim: cim,
          children: child,
          nom: data.value.nom,
          description: data.value.description,
          state: 'activated',
          likes: [],
          dislikes: [],
          bookmarks: [],
          created: serverTimestamp(),
          image: publicImageUrl,
          audio: publicAudioUrl,
          pharmaName: pharma.get('nom')
        }
      );

      await setDoc(doc(getFirestore(), `Pharmacopees/${getAuth().currentUser.uid}/Remedes/${docRef.id}`),
        {
          cim: cim,
          children: child,
          created: serverTimestamp()
        }
      );
      data.reset();
      this.appService.dismissLoading();
      this.appService.presentToast('Remèdes ajouté avec succèss', 'light');
    } else {
      this.appService.presentToast('Veuillez renseigner correctement tous champs', 'danger');
    }
  }

}
