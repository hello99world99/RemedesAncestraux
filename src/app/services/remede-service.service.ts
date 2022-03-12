/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { arrayRemove, getDoc, getFirestore, setDoc, Timestamp } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { User } from 'src/environments/models';
import { arrayUnion } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class RemedeServiceService {

  private user = new User();
  private document: any;
  private child: string;
  private auth = getAuth();
  private db = getFirestore();
  constructor(
    private router: Router,
    private menu: MenuController,
    private toastCtrl: ToastController,

  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
        return uid;
      } else {
        return false;
      }
    });
  }

  public async signWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.user.userName = user.email;
        this.user.displayName = user.displayName;
        this.user.photoURL = user.photoURL;
        this.setCurrentUser(user);
        const docRef = doc(this.db, `${user.uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          console.log('Bienvenue');
        } else {
          setDoc(
            doc(this.db, 'Users', user.uid), {
            displayName: user.displayName,
            userName: user.email,
            photoURL: user.photoURL,
            state: this.user.state,
            created: Timestamp.now()
          }, { merge: true }
          ).then((results: any) => {
            this.router.navigateByUrl('profile', { skipLocationChange: true }).then(() =>
              this.router.navigate(['']));
            console.log('User added successfully...', results);
            // window.location.reload();
          }).catch((error) => {
            console.log('Unable to add user: ' + error.message);
          });
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  /**
   * When the user is logged in, its data will be stored
   * in the localStorage
   *
   * @param user
   * @return any
   * @memberof RemedeServiceService
   */
  public setCurrentUser(user: any): any {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getDocument(): any {
    return this.document;
  }

  public setDocument(child: any) {
    this.document = child;
  }

  public setPath(uid: string) {
    this.child = uid;
  }

  public getPath(): string {
    return this.child;
  }

  public async createPharma(uid: string, value: any) {
    await setDoc(doc(this.db, 'Pharmacopees', uid), value);
    this.router.navigateByUrl('/gerer');
  }

  public async like(remede: string){
    return await await setDoc(doc(getFirestore(), `CIM/${remede[1]['cim']}/Children/${remede[1]['children']}/Remedes/${remede[0]}`), {
      likes: arrayUnion(getAuth().currentUser.uid),
      dislikes: arrayRemove(getAuth().currentUser.uid)
    },
    { merge: true });
  }

  public async dislike(remede: string){
    return await await setDoc(doc(getFirestore(), `CIM/${remede[1]['cim']}/Children/${remede[1]['children']}/Remedes/${remede[0]}`), {
      dislikes: arrayUnion(getAuth().currentUser.uid),
      likes: arrayRemove(getAuth().currentUser.uid),
    },
    { merge: true });
  }

  public signOut() {
    signOut(getAuth());
    localStorage.removeItem('user');
    this.menu.close();
    // this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
    // this.router.navigate(['profile']));
    window.location.reload();
  }

  public getUser() {
    return getAuth().currentUser;
  }

  public authStateObserver(user) {
    if (user) {
      return user;
      // We save the Firebase Messaging Device token and enable notifications.
      // saveMessagingDeviceToken();
    } else {
      // User is signed out!
      // Hide user's profile and sign-out button.
      return user;
    }
  }

  public async presentToast(infos: string, state: string) {
    const toast = await this.toastCtrl.create({
      message: infos,
      position: 'top',
      color: state,
      duration: 3130
    });
    await toast.present();
  }

  public initFirebaseAuth() {
    onAuthStateChanged(getAuth(), this.authStateObserver);
  }

}
