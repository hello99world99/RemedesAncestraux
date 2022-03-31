/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { PharmaServiceService } from '../../services/pharma-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public searchText: string;
  public results: DocumentData[] = [];
  constructor(
    private pharmaService: PharmaServiceService,
    private modalController: ModalController,
    private router: Router
  ) { }

  async ngOnInit() {
    const result = await this.pharmaService.findRemedes();
    result.forEach((remedes) => {
      this.results.push([remedes.id, remedes.data()]);
    });
  }

  public async modalDismiss(){
    this.modalController.dismiss();
  }

  public async showRemedy(uid: string) {
    this.router.navigate(['/remede-infos', {
      uid: uid
    }]);
    this.modalDismiss();
  }

}
