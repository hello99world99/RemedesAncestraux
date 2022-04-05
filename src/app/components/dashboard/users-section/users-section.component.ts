import { Component, OnInit } from '@angular/core';
import { collection, doc, getDocs, getFirestore, orderBy, query, updateDoc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.component.html',
  styleUrls: ['./users-section.component.scss'],
})
export class UsersSectionComponent implements OnInit {

  public users: any[] = [];
  public skeleton = true;
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
     this.users = [];
    const q = query(collection(getFirestore(), 'Users'), orderBy('displayName'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      this.users.push([data.id, data.data()]);
    });
    this.skeleton = false;
  }

  public async activateUser(uid: string) {
    await updateDoc(doc(getFirestore(), `Users/${uid}`),{
      state: 'activated'
    });
    this.appService.presentToast('Utilisateur activé avec succèss', 'light');
    await this.getUsers();
  }

  public async desactivateUser(uid: string) {
    await updateDoc(doc(getFirestore(), `Users/${uid}`),{
      state: 'desactivated'
    });
    this.appService.presentToast('Utilisateur desactivé avec succèss', 'danger');
    await this.getUsers();
  }

}
