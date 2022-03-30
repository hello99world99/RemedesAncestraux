/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { PharmaServiceService } from '../../services/pharma-service.service';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
// import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-remede-infos',
  templateUrl: './remede-infos.page.html',
  styleUrls: ['./remede-infos.page.scss'],
})
export class RemedeInfosPage implements OnInit {

  public config: SwiperOptions = {
    slidesPerView: 2.4,
    spaceBetween: 2,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  public pharma: DocumentData;
  public remede: DocumentSnapshot<DocumentData>;
  public owner: DocumentData;
  public remedies: DocumentSnapshot<DocumentData>[] = [];
  public currentUser: any;
  private uid: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService,
    // private nativeAudio: NativeAudio
  ) { }

  async ngOnInit() {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    this.uid = this.activeRoute.snapshot.paramMap.get('uid');
    this.currentUser = getAuth().currentUser;
    this.remede = await this.pharmaService.getActivatedRemedy(this.uid);
    this.getAllRemedes();
    this.pharma = await this.pharmaService.getPharma(this.remede?.get('pharmacopee'));
    const userInfoRef = this.pharmaService.getOwnerInfos(this.remede?.get('pharmacopee'));
    this.owner = await userInfoRef;
    this.appService.dismissLoading();
  }

  public async getRemede(uid: string){
    this.remede = await this.pharmaService.getActivatedRemedy(uid);
  }

  /**
   *Method that returns all remedy available for a specified illness
   *
   * @memberof RemedeInfosPage
   */
  public async getAllRemedes() {
    this.remedies = [];
    const remedies = await this.pharmaService.getRemedes(this.remede.get('pharmacopee'));
    remedies.forEach((result) => {
      this.remedies.push(result);
    });
  }

  /**
   *Method to display a remedy belonging to swiper list
   *When clicked, remedy will be displayed in the top of the swiper
   *
   * @memberof RemedeInfosPage
   */
  public async showRemede(data: DocumentData) {
    this.remede = await this.pharmaService.getActivatedRemedy(data?.id);
  }

  /**
   * Method to like a remedy
   *
   * @memberof RemedeInfosPage
   */
  public like(remedy: DocumentData) {
    this.appService.like(remedy).then((result) => {
      this.getAllRemedes();
      this.showRemede(remedy);
    });
  }

  /**
   * Method to dislike a remedy
   *
   * @memberof RemedeInfosPage
   */
  public dislike(remedy: DocumentData) {
    this.appService.dislike(remedy).then((result) => {
      this.getAllRemedes();
      this.showRemede(remedy);
    });
  }

  /**
   *Method to comment a remedy
   *
   * @memberof RemedeInfosPage
   */
  public comment(uid: string) {
    console.log('comment : ' + uid);
  }

  /**
   *Method to add a remedy in to favorite page
   *
   * @memberof RemedeInfosPage
   */
  public addToBookmark(data: DocumentData): void {
    this.pharmaService.addRemedyToBookmark(data);
    this.showRemede(data);
  }

  public async removeFromBookmark(remedy: DocumentData){
    await this.pharmaService.removeRemedyFromBookmark(remedy);
    await this.showRemede(remedy);
  }

  public async shareIt(remedy: DocumentData){
    this.appService.shareRemedy(remedy);
  }

  // public async playAudio(audio: string){
  //   console.log(audio);
  // }

}
