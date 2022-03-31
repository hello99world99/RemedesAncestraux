/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DocumentData } from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.page.html',
  styleUrls: ['./write-message.page.scss'],
})
export class WriteMessagePage implements OnInit {

  public toUser: DocumentData;
  public message: string;
  private to: string;
  constructor(
    private appService: RemedeServiceService,
    private activeRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.to = this.activeRoute.snapshot.paramMap.get('to');
    this.toUser = await this.appService.getUser(this.to);
    this.initMessage();
  }

  public async sendMessage() {
    if (this.message !== undefined) {
      console.log(this.message);
      this.message = undefined;
    } else {
      this.appService.presentToast('Le message est vide', 'danger');
    }
  }

    public async initMessage() {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: 'AAAAESIL60Y:APA91bF4jJQ5MhsyJiOmw7QIoF69ACc7o9rmH29F3JDLkkJznSpsCbmc9j3mDM4M-N_Bd7PzLcKV8BENMluW77kZ81vRBy5GIMHmm5AXVkloBzTK78ap1bkgOyh5-fY5fq-Ebh5bbSsT' })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }

}
