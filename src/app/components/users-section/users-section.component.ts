import { Component, OnInit } from '@angular/core';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.component.html',
  styleUrls: ['./users-section.component.scss'],
})
export class UsersSectionComponent implements OnInit {

  public users: any[] = [];

  constructor(
    private appService: RemedeServiceService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Method to get all CIM from remedy service
   *
   * @memberof CimPage
   */

   public async getUsers() {
    const q = query(collection(getFirestore(), 'Users'), orderBy('displayName'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      this.users.push([data.id, data.data()]);
    });
    this.appService.dismissLoading();
  }

  public async activateUser(uid: string) {
    console.log(uid);
  }

  public async desactivateUser(uid: string) {
    console.log(uid);
  }

}
