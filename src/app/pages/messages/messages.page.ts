/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentData } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public searchMessage: string;
  public users: DocumentData[] = [];
  public currentUser: DocumentData;
  public skeleton = true;
  constructor(
    private appService: RemedeServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.getUsers();
  }

  public async getUsers() {
    this.users = [];
    const results = await this.appService.getMessages();
    results.forEach((data) => {
      this.users.push(data);
    });
    this.skeleton = false;
  }

  public writeMessage(uid: string){
    this.router.navigate(['write-message', {
      to: uid
    }]);
  }

  public async doRefresh(event) {
    await this.ngOnInit();
    await event.target.complete();
  }

}
