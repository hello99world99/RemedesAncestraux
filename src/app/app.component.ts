/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
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
  }

  ngOnInit() {
    this.appService.initFirebaseAuth();
    this.getUser();
    const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('ionChange', (event: Event) => {
      document.body.classList.toggle('dark', event['detail'].checked);
    });
  }

  public async getUser() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(getFirestore(), '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
  }

  public closeMenu() {
    this.menu.close();
  }

  public async signOut() {
    await this.appService.signOut();
    await window.location.reload();
  }

  public favorites(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      this.router.navigateByUrl('/favorites');
    }
    this.menu.close();
  }

  public gestion() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      this.router.navigateByUrl('/gerer');
    } else {
      this.router.navigateByUrl('/sign-in');
    }
    this.menu.close();
  }
}
