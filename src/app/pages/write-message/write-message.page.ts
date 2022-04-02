/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, DocumentData, getDocs, getFirestore, orderBy, query, QuerySnapshot, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.page.html',
  styleUrls: ['./write-message.page.scss'],
})
export class WriteMessagePage implements OnInit {

  public toUser: DocumentData;
  public messages: QuerySnapshot;
  public message: string;
  public currentUser: DocumentData;
  public skeleton = true;
  private to: string;
  constructor(
    private appService: RemedeServiceService,
    private activeRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.to = this.activeRoute.snapshot.paramMap.get('to');
    this.toUser = await this.appService.getUser(this.to);
    this.currentUser = await this.appService.getUser(getAuth().currentUser.uid);
    await this.getMessages();
  }

  public async getMessages() {
    const messagesRef = query(collection(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}/Conversations`),
      orderBy('created')
    );
    this.messages = await getDocs(messagesRef);
    this.skeleton = false;
  }

  public async sendMessage() {
    if (this.message !== undefined) {
      await addDoc(collection(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}/Conversations`), {
        from: getAuth().currentUser.uid,
        to: this.toUser?.id,
        message: this.message,
        state: 'activated',
        created: serverTimestamp()
      });
      await setDoc(doc(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}`), this.toUser?.data(),
        { merge: true });

      await addDoc(collection(getFirestore(), `Messages/${this.toUser?.id}/Users/${getAuth().currentUser.uid}/Conversations`), {
        from: getAuth().currentUser.uid,
        to: this.toUser?.id,
        message: this.message,
        state: 'activated',
        created: serverTimestamp()
      });
      await setDoc(doc(getFirestore(), `Messages/${this.toUser?.id}/Users/${getAuth().currentUser.uid}`), this.currentUser?.data(),
        { merge: true }
      );
      this.message = await undefined;
    } else {
      await this.appService.presentToast('Le message est vide', 'danger');
    }
    await this.getMessages();
  }

  public async initMessage() {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: 'BFSMQFGLDNo3fu_oS6yCWRHE53h7PGhxa9ONp2EKmaJXx0Dr4ETzHsiDZm-LIPtrPg6_cYJvfYH8XLcfHBOM1V0' })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log('Token : ', currentToken);
        } else {
          // Show permission request UI
          console.log('My custom error message : No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('My Error message : An error occurred while retrieving token. ', err);
        // ...
      }
    );
  }

  public async doRefresh(event) {
    await this.ngOnInit();
    await event.target.complete();
  }

}
