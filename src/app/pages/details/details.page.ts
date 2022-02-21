import { Component, OnInit, ViewChild } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { slideOpts } from 'src/environments/settings';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {

  public details: any;
  public slideOptions = slideOpts;
  private path: string;
  private db = getFirestore();
  constructor(
    private appService: RemedeServiceService,
  ) { }

  ngOnInit() {
    this.path = this.appService.getPath();
    this.getDetails();
  }

  public async getDetails() {
    const docRef = doc(this.db, this.path);
    const snapDoc = await getDoc(docRef);
    this.details = snapDoc.data();
  }

  public onSwiper(swiper) {
    console.log(swiper);
  }

  public onSlideChange() {
    console.log('slide change');
  }

}
