/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';
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
  public remedes: DocumentData[] = [];
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
    const q = query(collection(getFirestore(), `CIM/${path[1]}/Children/${path[3]}/Remedes/`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((result) => {
      this.remedes.push([result.id, result.data()]);
      console.log(this.remedes);
    });
  }

  public showRemede(remede: any){
    this.router.navigate(['/remede-infos', {
      remede: JSON.stringify(remede)
    }]);
  }

  public logScrolling(event: Event){
    const header = document.querySelector('#header');
    header['style'].height = `${201-event['detail'].scrollTop}px`;
  }

  public like(remede: any){
    this.appService.like(remede).then((result) => {
      this.getRemede();
    });
  }

  public dislike(remede: any){
    this.appService.dislike(remede).then((result) => {
      this.getRemede();
    });
  }

  public comment(uid: string){
    console.log('comment : ' + uid);
  }

  public addToFavorite(uid: string){
    console.log('Add to favorite : ', uid);
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
