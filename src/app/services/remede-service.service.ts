import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
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
        this.user.userName = user.email;
        this.user.displayName = user.displayName;
        this.user.photoURL = user.photoURL;
        this.setCurrentUser(this.auth);
        setDoc(
          doc(this.db, 'Users', user.uid),{
            displayName: user.displayName,
            userName: user.email,
            photoURL: user.photoURL,
            state: this.user.state,
            created: Timestamp.now()
          }, {merge: true}
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
    return getAuth().currentUser;
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

  public async saveImageMessage(data: any, file) {
    try {
      // 1 - We add a message with a loading icon that will get updated with the shared image.
      const userRef = await addDoc(collection(getFirestore(), 'some-reference'), {
        data
      });

      // 2 - Upload the image to Cloud Storage.
      const filePath = `Files/images/profile/${getAuth().currentUser.uid}/${file.name}`;
      const newImageRef = ref(getStorage(), filePath);
      console.log('New reference ', newImageRef);
      const fileSnapshot = await uploadBytesResumable(newImageRef, file);

      // 3 - Generate a public URL for the file.
      const publicImageUrl = await getDownloadURL(newImageRef);

      // 4 - Update the chat message placeholder with the image's URL.
      await updateDoc(userRef, {
        imageUrl: publicImageUrl,
        storageUri: fileSnapshot.metadata.fullPath
      });
    } catch (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    }
  }

}
