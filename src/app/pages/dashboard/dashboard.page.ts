import { Component, OnInit } from '@angular/core';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public tab = 'users';
  public users: any[] = [];
  private db = getFirestore();
  constructor() {}

  ngOnInit() {
    this.getUsers();
  }

  public segmentChanged(tab: any) {
    this.tab = tab.detail.value;
  }

  public async getUsers(){
    const q = query(collection(this.db, 'Users'), orderBy('displayName'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      const id = data.id;
      const user = [
        id, data.data()
      ];
      this.users.push(user);
    });
  }

}
