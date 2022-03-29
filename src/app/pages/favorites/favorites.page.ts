/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemedeServiceService } from '../../services/remede-service.service';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public segmentValue = 'cim';
  public cim: DocumentData [] = [];
  constructor(
    private appService: RemedeServiceService
  ) { }

  async ngOnInit() {
    this.cim = await this.appService.getFavoritesCim();
    console.log('cim : ', this.cim);
  }

  public segmentChanged(event: Event){
    this.segmentValue = event.target['value'];
  }

}
