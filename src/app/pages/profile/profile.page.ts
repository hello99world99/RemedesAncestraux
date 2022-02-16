import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentUser: any;
  private db = getFirestore();
  private loading: any;
  constructor(
    private chooser: Chooser,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoadingDefault();
    this.getUser();
  }

  public async getUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(this.db, '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
    this.loading.dismiss();
  }

  public async uploadPhoto(){
    await this.chooser.getFile()
  .then(file => console.log(file ? file.name : 'canceled'))
  .catch((error: any) => console.error(error));
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Veuillez patienter...</span>',
    });
    await this.loading.present();
  }

}
