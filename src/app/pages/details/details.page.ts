/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { doc, DocumentData, getDoc, getFirestore, QueryDocumentSnapshot } from 'firebase/firestore';
import { PharmaServiceService } from 'src/app/services/pharma-service.service';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  public details: any;
  public remedes: QueryDocumentSnapshot<DocumentData>[] = [];
  public currentUser: any;
  private path: string;
  private db = getFirestore();
  constructor(
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.path = this.appService.getPath();
    console.log(this.path);
    this.getDetails();
    this.getRemede();
    this.currentUser = getAuth().currentUser;
  }

  public async getDetails() {
    const docRef = doc(this.db, this.path);
    const snapDoc = await getDoc(docRef);
    this.details = snapDoc.data();
  }

  public async getRemede() {
    this.remedes = [];
    const path = this.path.split('/');
    const result = await this.pharmaService.getIllnessRemedies(path[1], path[3]);
    result.docs.forEach((data) => {
      this.remedes.push(data);
    });
  }

  public showRemede(uid: string){
    this.router.navigate(['/remede-infos', {
      uid: uid
    }]);
  }

  public logScrolling(event: Event){
    const header = document.querySelector('#header');
    header['style'].height = `${201-event['detail'].scrollTop}px`;
  }

  public like(data: DocumentData){
    this.appService.like(data).then((result) => {
      this.getRemede();
    });
  }

  public dislike(data: DocumentData){
    this.appService.dislike(data).then((result) => {
      this.getRemede();
    });
  }

  public comment(uid: string){
    console.log('comment : ' + uid);
  }

  /**
   *Method to add a remedy in to favorite page
   *
   * @param {string} uid
   * @memberof RemedeInfosPage
   */
   public addToBookmark(remedy: DocumentData) {
    this.pharmaService.addRemedyToBookmark(remedy);
    this.getRemede();
  }

  public async removeFromBookmark(remedy: DocumentData){
    await this.pharmaService.removeRemedyFromBookmark(remedy);
    this.getRemede();
  }

  public async shareIt(remedy: DocumentData){
    this.appService.shareRemedy(remedy);
  }

  public async addRemede(){
    const pharma = this.pharmaService.getPharma(this.currentUser.uid);
    if ((await pharma).exists()){
    const path = this.path.split('/');
      this.router.navigate(['remedes', {
        ref: JSON.stringify([path[1], path[3]])
      }]);
    }else{
      const alert = await this.alertController.create({
        cssClass: 'cgreen',
        header: 'Installer une pharmacopées',
        message: '<strong>Aucune pharmacopée enregistrer en votre compte. Voulez-vous en créer ?</strong>',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'warnning',
            handler: (blah) => {}
          }, {
            text: 'Créer',
            handler: () => {
              this.router.navigateByUrl('/sign-up-pharma');
            }
          }
        ]
      });
      alert.present();
    }
  }

}
