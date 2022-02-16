import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public details: any;
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

}
