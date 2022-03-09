import { Component, OnInit, ViewChild } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { slideOpts } from 'src/environments/settings';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {

  public details: any;
  public remedes: any[] = [];
  public slideOptions = slideOpts;
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
    console.log(querySnapshot);
    console.log(`CIM/${path[1]}/Children/${path[3]}/Remedes/`);
    querySnapshot.forEach((result) => {
      console.log(result.data());
    });
    console.log('Great...');
  }

  public onSwiper(swiper) {
      console.log(swiper);
    }

  public onSlideChange() {
      console.log('slide change');
    }

}
