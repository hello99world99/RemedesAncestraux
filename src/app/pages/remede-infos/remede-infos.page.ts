/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { PharmaServiceService } from '../../services/pharma-service.service';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-remede-infos',
  templateUrl: './remede-infos.page.html',
  styleUrls: ['./remede-infos.page.scss'],
})
export class RemedeInfosPage implements OnInit {

  public config: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 8,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  public pharma: DocumentData;
  public remede: Promise<DocumentData>;
  public owner: DocumentData;
  public remedies: any[] = [];
  public currentUser: any;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService
  ) { }

  async ngOnInit() {
    this.remede = JSON.parse(this.activeRoute.snapshot.paramMap.get('remede'));
    this.currentUser = getAuth().currentUser;
    const docSnap = this.pharmaService.getPharma(this.remede[1].pharmacopee);
    const userInfoRef = this.pharmaService.getOwnerInfos(this.remede[1].pharmacopee);
    this.pharma = (await docSnap).data();
    this.owner = await (await userInfoRef).data();
    this.getAllRemedes();
  }

  /**
   *Method that returns all remedy available for a specified illness
   *
   * @return {*}  {Promise<DocumentData[]>}
   * @memberof RemedeInfosPage
   */
  public async getAllRemedes() {
    this.remedies = [];
    const remedies = await this.pharmaService.getRemedes(this.remede[1].pharmacopee);
    remedies.forEach(async (remedy) => {
      const result = this.pharmaService.getRemedesFromCIM(remedy.id, remedy.data());
      this.remedies.push([(await result).id, (await result).data()]);
    });
  }

  /**
   *Method to display a remedy belonging to swiper list
   *When clicked, remedy will be displayed in the top of the swiper
   *
   * @param {*} remedy
   * @memberof RemedeInfosPage
   */
  public showRemede(remedy: any) {
    console.log('showRemede : ', remedy);
    this.remede = remedy;
  }

  /**
   * Method to like a remedy
   *
   * @param {*} remedy
   * @memberof RemedeInfosPage
   */
  public like(remedy: any) {
    this.appService.like(remedy).then((result) => {
      this.getAllRemedes();
      this.showRemede(remedy);
      console.log('From remedy infos...');
    });
  }

  /**
   * Method to dislike a remedy
   *
   * @param {*} remedy
   * @memberof RemedeInfosPage
   */
  public dislike(remedy: any) {
    this.appService.dislike(remedy).then((result) => {
      this.getAllRemedes();
      this.showRemede(remedy);
    });
  }

  /**
   *Method to comment a remedy
   *
   * @param {string} uid
   * @memberof RemedeInfosPage
   */
  public comment(uid: string) {
    console.log('comment : ' + uid);
  }

  /**
   *Method to add a remedy in to favorite page
   *
   * @param {string} uid
   * @memberof RemedeInfosPage
   */
  public addToFavorite(uid: string): void {
    console.log('Add to favorite : ', uid);
  }

}
