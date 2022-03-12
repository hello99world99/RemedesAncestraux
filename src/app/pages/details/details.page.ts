/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
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
  public currentUser: any;
  private path: string;
  private db = getFirestore();
  constructor(
    private appService: RemedeServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute
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
    const path = this.path.split('/');
    const q = query(collection(getFirestore(), `CIM/${path[1]}/Children/${path[3]}/Remedes/`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((result) => {
      this.remedes.push([result.id, result.data()]);
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
