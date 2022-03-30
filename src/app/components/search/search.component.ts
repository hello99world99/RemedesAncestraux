import { Component, OnInit } from '@angular/core';
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
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    const result = await this.pharmaService.findRemedes();
    result.forEach((remedes) => {
      this.results.push(remedes.data());
    });
  }

  public async modalDismiss(){
    this.modalController.dismiss();
  }

  public async search(searchText: string) {
  }

}
