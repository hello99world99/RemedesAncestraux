import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth, User } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { RemedeServiceService } from './services/remede-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentUser: any;
  constructor(
    private appService: RemedeServiceService,
    private menu: MenuController,
    private router: Router
  ) {
    this.appService.initFirebaseAuth();
    this.getUser();
  }

  public async getUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(getFirestore(), '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
  }

  ngOnInit() {
  }

  public closeMenu(){
    this.menu.close();
  }

  public async signOut(){
    await this.appService.signOut();
  }

  public gestion(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser){
      this.router.navigateByUrl('/gerer');
    }else{
      this.router.navigateByUrl('/sign-in');
    }
    this.menu.close();
  }
}
