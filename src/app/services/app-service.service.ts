import { Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private auth = getAuth();
  private firestore = getFirestore();
  private user: User;
  constructor() {
  }

  public signIn(): void {
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
        this.setCurrentUser(this.user);
        setDoc(
          doc(this.firestore, 'Users', user.uid),{
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
          }
        ).then((results: any) => {
          console.log('User added successfully...');
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
}
