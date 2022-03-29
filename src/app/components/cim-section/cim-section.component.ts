/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { EditCimComponent } from '../edit-cim/edit-cim.component';
@Component({
  selector: 'app-cim-section',
  templateUrl: './cim-section.component.html',
  styleUrls: ['./cim-section.component.scss'],
})
export class CimSectionComponent implements OnInit {

  public cimList: any[] = [];
  constructor(
    public modalController: ModalController,
    private appService: RemedeServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getListCIM();
  }

  public async getListCIM() {
    this.cimList = [];
    const querySnapshot = await this.appService.getListCIM();
    querySnapshot.forEach((data) => {
      this.cimList.push([data.id, data.data()]);
    });
    this.appService.dismissLoading();
  }

  public async activateCIM(uid: string) {
    const cimRef = doc(getFirestore(), 'CIM', uid);
    await updateDoc(cimRef, {
      state: 'activated',
    }).then((result) => {
      this.appService.presentToast('CIM reactivaté avec succèss', 'light');
      this.getListCIM();
    });
  }

  public async desactivateCIM(uid: string) {
    const cimRef = doc(getFirestore(), 'CIM', uid);
    await updateDoc(cimRef, {
      state: 'desactivated',
    }).then((result) => {
      this.appService.presentToast('CIM supprimé avec succèss', 'light');
      this.getListCIM();
    });
  }

  public async editCIM(uid: string){
    const modal = await this.modalController.create({
      component: EditCimComponent,
      cssClass: 'light',
      swipeToClose: true,
      componentProps: {
        uid: uid
      }
    });
    return await modal.present();
  }

  public viewContents(uid: string){
    this.router.navigate(['cim-content', {
      uid: uid
    }]);
  }

}
