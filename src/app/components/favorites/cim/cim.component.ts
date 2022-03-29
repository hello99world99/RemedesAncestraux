/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { RemedeServiceService } from '../../../services/remede-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cim',
  templateUrl: './cim.component.html',
  styleUrls: ['./cim.component.scss'],
})
export class CimComponent implements OnInit {

  public cimList: any[] = [];
  constructor(
    private appService: RemedeServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.cimList = await this.appService.getFavoritesCim();
  }

  public showChildren(uid: string){
    this.router.navigate(['children', {
      uid: uid
    }]);
  }

  public async removeFromFavorite(data: DocumentData){
    await this.appService.removeFromFavorite(data);
    this.cimList = await this.appService.getFavoritesCim();
  }

}
