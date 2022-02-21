import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public pharma: any;
  private db = getFirestore();
  private loading: any;
  constructor(
    public loadingCtrl: LoadingController,
    private router: Router
  ) {
    this.presentLoadingDefault();
    this.getPharma();
  }

  public installPharma(){
    this.router.navigateByUrl('/sign-up-pharma');
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Veuillez patienter...</span>',
    });
    await this.loading.present();
  }

  public async getPharma(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const docRef = doc(this.db, 'Pharmacopees', currentUser.uid);
    const docSnap = await getDoc(docRef);
    this.pharma = docSnap.data();
    this.loading.dismiss();
  }
}
