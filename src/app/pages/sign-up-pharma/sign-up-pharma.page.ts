/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore, Timestamp } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-sign-up-pharma',
  templateUrl: './sign-up-pharma.page.html',
  styleUrls: ['./sign-up-pharma.page.scss'],
})
export class SignUpPharmaPage implements OnInit {

  private currentUser: any;
  private db = getFirestore();
  constructor(
    private appService: RemedeServiceService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  public async getUser(){
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const docRef = doc(this.db, 'Users', currentUser.uid);
      const snapDoc = await getDoc(docRef);
      this.currentUser = snapDoc.data();
    }
  }

  public chooseImage(){
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
    console.log(imageInput);
  }

  public createPharma(data: any): void {
    console.log(data.value);
    if (data.valid) {
      data.value.created = Timestamp.now();
      const image = document.getElementById('imageInput');
      const currentUser = JSON.parse(localStorage.getItem('user'));
      this.appService.createPharma(currentUser.uid, data.value, image['files'][0]);
      data.reset();
      this.appService.presentToast('<b>Pharmacopée ajoutée avec succèss...</b>', 'light');
    }else{
      this.appService.presentToast('<b>Veuillez renseigner tous les champs...</b>', 'danger');
    }
  }

}
