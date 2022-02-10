import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-cim',
  templateUrl: './cim.page.html',
  styleUrls: ['./cim.page.scss'],
})
export class CimPage implements OnInit {

  public cimList: any[] = [];
  public user: any;
  private db = getFirestore();
  constructor(
    private menu: MenuController,
    private appService: RemedeServiceService,
    private router: Router
  ) {
    this.getListCIM();
  }

  ngOnInit() {
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
  }

  public addToFavorite(data: any){
    console.log(data);
  }

  public showChildren(child){
    this.appService.setDocument(child);
    this.router.navigateByUrl('/children');
  }

  public login(){
    this.router.navigateByUrl('/sign-in');
  }

  public openMenu() {
    this.menu.open();
  }

}
