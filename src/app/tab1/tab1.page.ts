/* eslint-disable object-shorthand */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { getAuth, User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import { EditRemedesComponent } from '../components/editor/edit-remedes/edit-remedes.component';
import { PharmaServiceService } from '../services/pharma-service.service';
import { RemedeServiceService } from '../services/remede-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public pharma: any;
  public remedies: DocumentData[] = [];
  public currentUser: User = getAuth().currentUser;
  public searchRemedy: string;
  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private pharmaService: PharmaServiceService,
    private appService: RemedeServiceService,
    private modalController: ModalController
  ) {
    this.appService.presentLoadingDefault('Veuillez patienter...');
    this.getPharma();
    this.getAllRemedes();
  }

  public installPharma() {
    this.router.navigateByUrl('/sign-up-pharma');
  }

  public async getPharma() {
    const pharmaRef = this.pharmaService.getPharma(this.currentUser.uid);
    this.pharma = (await pharmaRef).data();
    this.appService.dismissLoading();
  }

  /**
   *Get all remedies for current user
   *
   * @memberof Tab1Page
   */
  public async getAllRemedes() {
    const result = await this.pharmaService.getMyRemedies(this.currentUser.uid);
    result.forEach((data) => {
      this.remedies.push(data);
    });
  }

  public addRemede() {
    this.router.navigateByUrl('/remedes');
  }

  public async editRemedy(uid: string) {
    const modal = await this.modalController.create({
      component: EditRemedesComponent,
      componentProps: {
        uid: uid
      }
    });
    return await modal.present();
  }
}
