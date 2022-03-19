import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public tab = 'cim';

  constructor(
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
  }

  public segmentChanged(tab: any) {
    this.tab = tab.detail.value;
  }

}
