/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore, serverTimestamp } from 'firebase/firestore';
import { PharmaServiceService } from 'src/app/services/pharma-service.service';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-sign-up-pharma',
  templateUrl: './sign-up-pharma.page.html',
  styleUrls: ['./sign-up-pharma.page.scss'],
})
export class SignUpPharmaPage implements OnInit {

  private currentUser: any;
  constructor(
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  public async getUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(getFirestore(), 'Users', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
  }

  public chooseImage(){
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
  }

  public async createPharma(data: any) {
    if (data.valid) {
      this.appService.presentLoadingDefault('Création de la pharmacopée, veuillez patienter...');
      data.value.created = serverTimestamp();
      const image = document.getElementById('imageInput');
      const currentUser = JSON.parse(localStorage.getItem('user'));
      await this.pharmaService.createPharma(currentUser.uid, data.value, image['files'][0]);
      data.reset();
      await this.appService.dismissLoading();
      await this.appService.presentToast('<b>Pharmacopée ajoutée avec succèss...</b>', 'light');
    }else{
      this.appService.presentToast('<b>Veuillez renseigner correctement tous les champs...</b>', 'danger');
    }
  }

}
