import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { getAuth, User } from 'firebase/auth';
import { doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore';
import { PharmaServiceService } from '../services/pharma-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public pharma: any;
  public remedies: DocumentData[] = [];
  public currentUser: User = getAuth().currentUser;
  private loading: any;
  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private pharmaService: PharmaServiceService
  ) {
    this.presentLoadingDefault();
    this.getPharma();
    this.getAllRemedes();
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
    const pharmaRef = this.pharmaService.getPharma(this.currentUser.uid);
    this.pharma = (await pharmaRef).data();
    this.loading.dismiss();
  }

  public async getAllRemedes(){
    const remedesRef = this.pharmaService.getRemedes(this.currentUser.uid);
    (await remedesRef).forEach(async (data) => {
      const result = this.pharmaService.getRemedesFromCIM(data.id, data.data());
      this.remedies.push([(await result).id, (await result).data()]);
    });
    console.log(this.remedies);
  }
}
