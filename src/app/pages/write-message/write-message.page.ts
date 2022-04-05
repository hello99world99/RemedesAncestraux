/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, DocumentData, getDocs, getFirestore, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.page.html',
  styleUrls: ['./write-message.page.scss'],
})
export class WriteMessagePage implements OnInit {

  public toUser: DocumentData;
  public messages: DocumentData[] = [];
  public message: string;
  public currentUser: DocumentData;
  public skeleton = true;
  private to: string;
  constructor(
    private appService: RemedeServiceService,
    private activeRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.to = this.activeRoute.snapshot.paramMap.get('to');
    this.toUser = await this.appService.getUser(this.to);
    this.currentUser = await this.appService.getUser(getAuth().currentUser.uid);
    const imageInput = document.getElementById('imagePicker');
    const imageButtonElement = document.getElementById('submitImage');
    imageButtonElement.addEventListener('click', () => {
      imageInput.click();
    });
    imageInput.addEventListener('change', (e) => {
      this.sendImage(e.target['files'][0]);
    });
    await this.getMessages();
  }

  public async getMessages() {
    this.messages = [];
    const messagesRef = query(collection(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}/Conversations`),
      orderBy('created')
    );
    const result = await getDocs(messagesRef);
    result.forEach((data) => {
      this.messages.push(data);
    });
    this.skeleton = false;
  }

  public async sendMessage() {
    if (this.message !== undefined) {
      await addDoc(collection(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}/Conversations`), {
        from: getAuth().currentUser.uid,
        to: this.toUser?.id,
        message: this.message,
        state: 'activated',
        type: 'text',
        created: serverTimestamp()
      });
      await setDoc(doc(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}`), this.toUser?.data(),
        { merge: true });

      await addDoc(collection(getFirestore(), `Messages/${this.toUser?.id}/Users/${getAuth().currentUser.uid}/Conversations`), {
        from: getAuth().currentUser.uid,
        to: this.toUser?.id,
        message: this.message,
        state: 'activated',
        type: 'text',
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

  public async sendImage(image: File) {
    this.appService.presentLoadingDefault('Chargement de l\'image, veuillez patienter...');
    const filePath = `Files/images/messages/${image.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    await addDoc(collection(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}/Conversations`), {
      from: getAuth().currentUser.uid,
      to: this.toUser?.id,
      message: publicImageUrl,
      state: 'activated',
      type: 'img',
      created: serverTimestamp()
    });
    await setDoc(doc(getFirestore(), `Messages/${getAuth().currentUser.uid}/Users/${this.toUser?.id}`), this.toUser?.data(),
      { merge: true });

    await addDoc(collection(getFirestore(), `Messages/${this.toUser?.id}/Users/${getAuth().currentUser.uid}/Conversations`), {
      from: getAuth().currentUser.uid,
      to: this.toUser?.id,
      message: publicImageUrl,
      state: 'activated',
      type: 'img',
      created: serverTimestamp()
    });
    await setDoc(doc(getFirestore(), `Messages/${this.toUser?.id}/Users/${getAuth().currentUser.uid}`), this.currentUser?.data(),
      { merge: true }
    );
    await this.getMessages();
    this.appService.dismissLoading();
  }

  public async doRefresh(event) {
    await this.ngOnInit();
    await event.target.complete();
  }

}
