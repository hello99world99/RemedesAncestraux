/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
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
export class Tab1Page implements OnInit{

  public pharma: any;
  public remedies: DocumentData[] = [];
  public currentUser: User = getAuth().currentUser;
  public searchRemedy: string;
  public skeleton = true;
  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private pharmaService: PharmaServiceService,
    private modalController: ModalController
  ) {
  }

  async ngOnInit(){
    await this.getPharma();
    await this.getAllRemedes();
  }

  public installPharma() {
    this.router.navigateByUrl('/sign-up-pharma');
  }

  public async getPharma() {
    const pharmaRef = await this.pharmaService.getPharma(this.currentUser.uid);
    this.pharma = pharmaRef.data();
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
    this.skeleton = false;
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
