/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  private cim: string;
  private child: string;
  constructor(
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cim = this.activeRoute.snapshot.paramMap.get('cim');
    this.child = this.activeRoute.snapshot.paramMap.get('child');
    this.getDetails();
    this.getRemede();
    this.currentUser = getAuth().currentUser;
  }

  public async getDetails() {
    const docRef = doc(getFirestore(), `CIM/${this.cim}/Children/${this.child}`);
    const snapDoc = await getDoc(docRef);
    this.details = snapDoc.data();
  }

  public async getRemede() {
    this.remedes = [];
    const result = await this.pharmaService.getIllnessRemedies(this.cim, this.child);
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
    const pharma = await this.pharmaService.getPharma(this.currentUser.uid);
    if (pharma.exists()){
      this.router.navigate(['remedes', {
        ref: JSON.stringify([this.cim, this.child])
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
