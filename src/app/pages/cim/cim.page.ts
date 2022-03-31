/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore';
import { SearchComponent } from 'src/app/components/search/search.component';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cim',
  templateUrl: './cim.page.html',
  styleUrls: ['./cim.page.scss'],
})
export class CimPage implements OnInit {

  public currentUser: any;
  public cimList: DocumentData[];
  public user: any;
  public skeleton = true;
  constructor(
    private menu: MenuController,
    private appService: RemedeServiceService,
    private app: AppComponent,
    private modalController: ModalController,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.appService.presentLoadingDefault('Chargement des contenues, veuillez patienter...');
    this.getUser();
    this.getListCIM();
  }

  public async getUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(getFirestore(), '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
  }

  /**
   *Method to get all CIM from remedy service
   *
   * @memberof CimPage
   */
  public async getListCIM(){
    this.cimList = [];
    const querySnapshot = await this.appService.getActivatedCIM();
    querySnapshot.forEach((data) => {
      this.cimList.push(data);
    });
    this.skeleton = false;
    // this.appService.dismissLoading();
  }

  public async addToFavorite(data: any){
    await this.appService.addFavorite(data);
    await this.getListCIM();
  }

  public showChildren(uid: string){
    // this.appService.setDocument(child);
    this.router.navigate(['children', {
      uid: uid
    }]);
  }

  public login(){
    if (this.currentUser){
      this.router.navigateByUrl('/profile');
    }else{
      this.router.navigateByUrl('/sign-in');
    }
  }

  public openMenu() {
    this.menu.open();
  }

  public async showSearch(){
    const modal = await this.modalController.create({
      component: SearchComponent,
      initialBreakpoint: 0.9,
      breakpoints: [0, 0.9, 1]
    });
    return await modal.present();
  }

  public async doRefresh(event) {
    await this.ngOnInit();
    await this.app.ngOnInit();
    await event.target.complete();
  }

}
