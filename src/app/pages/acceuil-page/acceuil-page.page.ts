import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import SwiperCore, {SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppServiceService } from 'src/app/services/app-service.service';
import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-acceuil-page',
  templateUrl: './acceuil-page.page.html',
  styleUrls: ['./acceuil-page.page.scss'],
})
export class AcceuilPagePage implements OnInit {

  public login = false;
  public auth = getAuth();

  public config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(
    private menu: MenuController,
    private mService: AppServiceService,
    private router: Router
  ) {
    const response = this.auth.currentUser;
    if (response != null) {
      this.router.navigateByUrl('/');
      console.log('Response : ', response);
    }else{
      console.log('Not connected to Firestore', response);
    }
    this.login = false;
  }

  ngOnInit() {
  }

  public openMenu() {
    this.menu.open();
  }

  onSwiper([swiper]) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
