import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { User } from 'src/environments/models';

@Injectable({
  providedIn: 'root'
})

export class RemedeServiceService {

  private user = new User();
  private document: any;
  private auth = getAuth();
  private db = getFirestore();
  constructor(
    private router: Router,
    private menu: MenuController
  ) {
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
          this.router.navigateByUrl('/sign-in', {skipLocationChange: true}).then(()=>
          this.router.navigate(['/']));
          console.log('User added successfully...', results);
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
        // ...
    });
  }

  public setCurrentUser(user: User): any {
    localStorage.setItem('user', JSON.stringify(user));
    // user. = true;
  }

  public getDocument(): any {
    return this.document;
  }

  public setDocument(child: any){
    this.document = child;
  }

  public signOut(){
    this.auth.signOut();
    localStorage.removeItem('user');
    this.menu.close();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/']));
  }

}
