import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public tab = 'users';
  public users: any[] = [];
  private db = getFirestore();
  private auth = getAuth();
  constructor(
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  public segmentChanged(tab: any) {
    this.tab = tab.detail.value;
  }

  public async getUsers() {
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

  public async activate(uid: string) {
    const desactivate = httpsCallable(getFunctions(), 'helloWorld');
    desactivate({user: uid}).then((result) => {
      console.log('Result: ' + result);
    }).catch((err) => {
      console.log('Error: ' + err);
    });
  }

  public async desactivate(uid: string) {
    console.log(uid);
  }

}
