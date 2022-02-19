import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';


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
  private db = getFirestore();
  private storage = getFirestore();
  private loading: any;
  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoadingDefault();
    this.getCim();
  }

  public addRemede(data: any) {
    console.log('Remede : ', data.value);
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
    this.presentLoadingDefault();
    this.getChildren(convert[0]);
  }

  public childChanged(data: any){
    const convert = data.value.child.split('@');
    this.illnessSelected = convert[1];
  }

  public async getChildren(uid: string) {
    this.children = [];
    const querySnapshot = await getDocs(
      collection(this.db, 'CIM/'+uid+'/Children')
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

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Chargement des contenues...</span>',
    });
    await this.loading.present();
  }

}
