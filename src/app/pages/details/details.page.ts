/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';
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
  public remedes: any[] = [];
  private path: string;
  private db = getFirestore();
  constructor(
    private appService: RemedeServiceService,
  ) { }

  ngOnInit() {
    this.path = this.appService.getPath();
    this.getDetails();
    this.getRemede();
  }

  public async getDetails() {
    const docRef = doc(this.db, this.path);
    const snapDoc = await getDoc(docRef);
    this.details = snapDoc.data();
  }

  public async getRemede() {
    const path = this.path.split('/');
    const q = query(collection(getFirestore(), `CIM/${path[1]}/Children/${path[3]}/Remedes/`));//, where('capital', '==', true));
    const querySnapshot = await getDocs(q);
    console.log(`CIM/${path[1]}/Children/${path[3]}/Remedes/`);
    querySnapshot.forEach((result) => {
      this.remedes.push([result.id, result.data()]);
    });
  }

  public showRemede(uid: string){
    console.log('show remede : ' + uid);
  }

  public logScrolling(event: Event){
    const header = document.querySelector('#header');
    header['style'].height = `${201-event['detail'].scrollTop}px`;
  }

  public like(uid: string){
    console.log('like : ' + uid);
  }

  public dislike(uid: string){
    console.log('dislike : ' + uid);
  }

  public comment(uid: string){
    console.log('comment : ' + uid);
  }

  public addToFavorite(uid: string){
    console.log('Add to favorite : ', uid);
  }

}
