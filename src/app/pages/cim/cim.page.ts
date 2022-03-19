import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-cim',
  templateUrl: './cim.page.html',
  styleUrls: ['./cim.page.scss'],
})
export class CimPage implements OnInit {

  public currentUser: any;
  public cimList: DocumentData[] = [];
  public user: any;
  constructor(
    private menu: MenuController,
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getUser();
    this.appService.presentLoadingDefault('Chargement des contenues, veuillez patienter...');
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
    const querySnapshot = await this.appService.getActivatedCIM();
    querySnapshot.forEach((data) => {
      this.cimList.push([data.id, data.data()]);
    });
    this.appService.dismissLoading();
  }

  public addToFavorite(data: any){
    console.log(data);
  }

  public showChildren(child){
    this.appService.setDocument(child);
    this.router.navigateByUrl('/children');
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

}
