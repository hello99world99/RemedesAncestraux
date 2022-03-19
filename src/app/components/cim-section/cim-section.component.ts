import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-cim-section',
  templateUrl: './cim-section.component.html',
  styleUrls: ['./cim-section.component.scss'],
})
export class CimSectionComponent implements OnInit {

  public cimList: any[] = [];
  private loadingCtrl: LoadingController;
  constructor(
    private appService: RemedeServiceService
  ) { }

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

}
