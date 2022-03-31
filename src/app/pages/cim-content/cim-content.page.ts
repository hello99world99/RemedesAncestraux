/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { doc, DocumentData, DocumentSnapshot, getFirestore, QueryDocumentSnapshot, QuerySnapshot, updateDoc } from 'firebase/firestore';
import { EditChildComponent } from 'src/app/components/editor/edit-child/edit-child.component';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-cim-content',
  templateUrl: './cim-content.page.html',
  styleUrls: ['./cim-content.page.scss'],
})
export class CimContentPage implements OnInit {

  public cim: DocumentSnapshot<DocumentData>;
  public children: QueryDocumentSnapshot<DocumentData>[] = [];
  private uid: string;
  constructor(
    private appService: RemedeServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.uid = this.activeRoute.snapshot.paramMap.get('uid');
    this.cim = await this.appService.getCIM(this.uid);
    this.getChildren(this.uid);
  }

  public addNewChild(uid: string) {
    this.router.navigate(['add-child', {
      uid: uid
    }]);
  }

  public async getChildren(uid: string) {
    this.children = [];
    const result = await this.appService.getChildren(uid);
    result.forEach((child) => {
      this.children.push(child);
    });
  }

  public async activateChild(uid: string) {
    const childRef = doc(getFirestore(), `CIM/${this.uid}/Children/${uid}`);
    await updateDoc(childRef, {
      state: 'activated',
    }).then((result) => {
      this.appService.presentToast('Maladie reactivaté avec succèss', 'light');
      this.getChildren(this.uid);
    });
  }

  public async desactivateChild(uid: string) {
    const cimRef = doc(getFirestore(), `CIM/${this.uid}/Children/${uid}`);
    await updateDoc(cimRef, {
      state: 'desactivated',
    }).then((result) => {
      this.appService.presentToast('Maladie supprimé avec succèss', 'light');
      this.getChildren(this.uid);
    });
  }

  public async editChild(uid: string){
    const modal = await this.modalController.create({
      component: EditChildComponent,
      cssClass: 'light',
      swipeToClose: true,
      initialBreakpoint: 0.9,
      breakpoints: [0, 0.9, 1],
      componentProps: {
        cim: this.uid,
        uid: uid
      }
    });
    return await modal.present();
  }

}
