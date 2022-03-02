import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { User } from 'src/environments/models';

@Injectable({
  providedIn: 'root'
})

export class RemedeServiceService {

  private user = new User();
  private document: any;
  private child: string;
  private auth = getAuth();
  private db = getFirestore();
  private screen: number [];
  constructor(
    private router: Router,
    private menu: MenuController
  ) {
    this.screen = [window.screen.availHeight, window.screen.availWidth];
  }

  public async signWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.user.email = user.email;
        this.user.displayName = user.displayName;
        this.user.phoneNumber = user.phoneNumber;
        this.user.photoURL = user.photoURL;
        this.setCurrentUser(this.auth.currentUser);
        setDoc(
          doc(this.db, 'Users', user.uid),{
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
          }
        ).then((results: any) => {
          this.router.navigateByUrl('profile', {skipLocationChange: true}).then(()=>
          this.router.navigate(['']));
          console.log('User added successfully...', results);
          // window.location.reload();
        }).catch((error) => {
          console.log('Unable to add user: ' + error.message);
        });
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

  public setCurrentUser(user: User): any {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getDocument(): any {
    return this.document;
  }

  public setDocument(child: any){
    this.document = child;
  }

  public setPath(uid: string){
    this.child = uid;
  }

  public getPath(): string{
    return this.child;
  }

  public async createPharma(uid: string, value: any) {
    await setDoc(doc(this.db, 'Pharmacopees', uid), value);
    this.router.navigateByUrl('/gerer');
  }

  public getScreen(): number[] {
    return this.screen;
  }

  public signOut(){
    signOut(getAuth());
    localStorage.removeItem('user');
    this.menu.close();
    // this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
    // this.router.navigate(['profile']));
    window.location.reload();
  }

  // Returns the signed-in user informations
  public getUser() {
    return getAuth().currentUser.displayName;
  }

  public authStateObserver(user) {
    if (user) {

    console.log('Sign in user : ', user);
      // We save the Firebase Messaging Device token and enable notifications.
      // saveMessagingDeviceToken();
    } else {
      // User is signed out!
      // Hide user's profile and sign-out button.
      console.log('User is signed out : ');
    }
  }

  public initFirebaseAuth() {
    onAuthStateChanged(getAuth(), this.authStateObserver);
  }

}
