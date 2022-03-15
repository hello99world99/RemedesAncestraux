/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { DocumentData, getDoc } from 'firebase/firestore';
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
  public remede: any;
  public owner: DocumentData;
  public remedies: DocumentData[] = [];
  public currentUser: any;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService
  ) {}

  async ngOnInit() {
    this.remede = JSON.parse(this.activeRoute.snapshot.paramMap.get('remede'));
    this.currentUser = getAuth().currentUser;
    const docSnap = this.pharmaService.getPharma(this.remede[1].pharmacopee);
    const userInfoRef = this.pharmaService.getOwnerInfos(this.remede[1].pharmacopee);
    this.pharma = await (await docSnap).data();
    this.owner = await (await userInfoRef).data();
    this.getAllRemedes();
  }

  public async getAllRemedes(){
    const remedesRef = this.pharmaService.getRemedes(this.remede[1].pharmacopee);
    (await remedesRef).forEach(async (data) => {
      const result = this.pharmaService.getRemedesFromCIM(data.id, data.data());
      this.remedies.push([(await result).id, (await result).data()]);
    });
  }

  public showRemede(remedy: any){
    this.remede = remedy;
    console.log(this.remede);
  }

  public like(remede: any){
    this.appService.like(remede).then((result) => {
      console.log('like : ' + result);
    });
  }

  public dislike(remede: any){
    this.appService.dislike(remede).then((result) => {
      console.log('dislike : ' + result);
    });
  }

  public comment(uid: string){
    console.log('comment : ' + uid);
  }

  public addToFavorite(uid: string){
    console.log('Add to favorite : ', uid);
  }

}
