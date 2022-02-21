import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-cim',
  templateUrl: './cim.page.html',
  styleUrls: ['./cim.page.scss'],
})
export class CimPage implements OnInit {

  public currentUser: any;
  public cimList: any[] = [];
  public user: any;
  private db = getFirestore();
  private loading: any;
  constructor(
    private menu: MenuController,
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getUser();
    this.presentLoadingDefault();
    this.getListCIM();
  }

  public async getUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(this.db, '/Users/', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
  }

  public async getListCIM(){
    const querySnapshot = await getDocs(collection(this.db, 'CIM'));
    querySnapshot.forEach((data) => {
      const id = data.id;
      const result = [
        id, data.data()
      ];
      this.cimList.push(result);
    });
    this.loading.dismiss();
  }

  public addToFavorite(data: any){
    console.log(data);
  }

  public showChildren(child){
    this.appService.setDocument(child);
    this.router.navigateByUrl('/children');
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Chargement des contenues...</span>',
    });
    await this.loading.present();
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
