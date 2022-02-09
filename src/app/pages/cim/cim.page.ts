import { Component, OnInit } from '@angular/core';
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
  private db = getFirestore();
  constructor(
    private menu: MenuController,
    private appService: RemedeServiceService
  ) {
    this.getListCIM();
  }

  ngOnInit() {
  }

  public async getListCIM(){
    const querySnapshot = await getDocs(collection(this.db, 'CIM'));
    querySnapshot.forEach((result) => {
      this.cimList.push(result.data());
    });
  }

  public addToFavorite(data: any){
    console.log(data);
  }

  public openMenu() {
    this.menu.open();
  }

}
