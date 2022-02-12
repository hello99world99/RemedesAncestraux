import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RemedeServiceService } from './services/remede-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public currentUser: any;
  constructor(
    private appService: RemedeServiceService,
    private menu: MenuController
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  public closeMenu(){
    this.menu.close();
  }

  public async signOut(){
    await this.appService.signOut();
  }
}
