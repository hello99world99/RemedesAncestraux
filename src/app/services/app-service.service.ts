import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, collectionSnapshots } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public auth = getAuth();
  private firestore: Firestore;
  private ngFirestore: AngularFirestore;
  private user: User;
  constructor() {
  }

  public signIn(): void {
  }

  public signWithGoogle(): any {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
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
        this.setCurrentUser(this.user);
        console.log('Result : ', result);
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
}
