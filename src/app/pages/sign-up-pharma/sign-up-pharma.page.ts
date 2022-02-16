import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
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

  public createPharma(data: any): void {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.appService.createPharma(currentUser.uid, data.value);
    data.reset();
  }

}
