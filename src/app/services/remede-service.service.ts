/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, arrayRemove, collection, deleteDoc, DocumentData, DocumentSnapshot, getDoc, getDocs, getFirestore, orderBy, query, serverTimestamp, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { User } from 'src/environments/models';
import { arrayUnion } from 'firebase/firestore';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})

export class RemedeServiceService {

  private user = new User();
  private child: string;
  private auth = getAuth();
  private db = getFirestore();
  private loading: any;
  constructor(
    private router: Router,
    private menu: MenuController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController

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

  public async getUser(uid: string) {
    const docRef = doc(getFirestore(), `/Users/${uid}`);
    return await getDoc(docRef);
  }

  /**
   *Method that returns all CIM
   *
   * @memberof RemedeServiceService
   */
  public async getActivatedCIM(): Promise<DocumentData> {
    const q = query(collection(getFirestore(), 'CIM'), where('state', '==', 'activated'), orderBy('chapitre'));
    return await getDocs(q);
  }

  public async getCIM(uid: string) {
    const docRef = doc(getFirestore(), 'CIM', uid);
    const docSnap = await getDoc(docRef);
    return docSnap;
  }

  // public async getActivatedCIMById(uid: string): Promise<DocumentData> {
  //   const q = query(collection(getFirestore(), 'CIM'), where('state', '==', 'activated'), orderBy('chapitre'));
  //   return await getDocs(q);
  // }

  public async getListCIM(): Promise<DocumentData> {
    const q = query(collection(getFirestore(), 'CIM'), orderBy('chapitre'));
    return await getDocs(q);
  }

  public async getChild(cim: string, child: string) {
    const childRef = doc(getFirestore(), `CIM/${cim}/Children/${child}`);
    return await getDoc(childRef);
  }

  public async shareRemedy(remedy: DocumentData) {
    const children = await this.getChild(remedy?.get('cim'), remedy?.get('children'));
    await Share.share({
      title: 'Remèdes Traditionnels',
      text: `Le saviez - vous ?\n ${remedy?.get('nom')} est très efficace dans le traitement de(s) : ${children?.get('title')}.\n Photo de la maladie : ${children?.get('image')}.\n Photo du remede : `,
      url: `${remedy.get('image')}`,
      dialogTitle: 'Partager avec : ',
    });
  }

  public async getChildren(uid: string) {
    const docRef = query(collection(getFirestore(), `CIM/${uid}/Children`), orderBy('chapitre'));
    return await getDocs(docRef);
  }

  public async addFavorite(data: DocumentData) {
    await updateDoc(doc(getFirestore(), `CIM/${data?.id}`), {
      likes: arrayUnion(getAuth().currentUser.uid),
    });
    await setDoc(doc(getFirestore(), `Favorites/${getAuth().currentUser.uid}/CIM/${data?.id}`), {
      uid: data?.id,
      created: serverTimestamp()
    });
    this.presentToast('Ajouté aux favoris', 'light');
  }

  public async removeFromFavorite(data: DocumentData) {
    await updateDoc(doc(getFirestore(), `CIM/${data?.id}`), {
      likes: arrayRemove(getAuth().currentUser.uid),
    });
    await deleteDoc(doc(getFirestore(), `Favorites/${getAuth().currentUser.uid}/CIM/${data?.id}`));
    this.presentToast('Supprimé de la liste des favoris', 'danger');
  }

  public async getFavoritesCim(){
    const array: DocumentData[] = [];
    const q = query(collection(getFirestore(), `Favorites/${getAuth().currentUser.uid}/CIM/`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (data) => {
      const result = await this.getCIM(data.get('uid'));
      array.push(result);
    });
    return array;
  }

  public async getActivatedChildren(uid: string) {
    const docRef = query(collection(getFirestore(), `CIM/${uid}/Children`), where('state', '==', 'activated'), orderBy('chapitre'));
    return await getDocs(docRef);
  }

  /**
   *Method to sign in / up with google auth provieder.
   *You don't so need to provide any password
   *
   * @memberof RemedeServiceService
   */
  public async signWithGoogle() {
    this.router.navigateByUrl('');
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
        const docSnap = await getDoc(doc(getFirestore(), `Users/${user.uid}`));
        if (docSnap.exists()) {
          this.presentToast(`Bienvenue ${docSnap.data().userName}`, 'light');
        } else {
          await setDoc(
            doc(getFirestore(), `Users/${user.uid}`), {
            displayName: user.displayName,
            userName: user.email,
            photoURL: user.photoURL,
            state: this.user.state,
            created: Timestamp.now()
          }, { merge: true }
          ).then((results: any) => {
            console.log('User added successfully...', results);
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
      }
      );
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

  public async like(data: DocumentData) {
    return await updateDoc(doc(getFirestore(), `Remedes/${data?.id}`), {
      likes: arrayUnion(getAuth().currentUser.uid),
      dislikes: arrayRemove(getAuth().currentUser.uid)
    });
  }

  public async dislike(data: DocumentData) {
    return await updateDoc(doc(getFirestore(), `Remedes/${data?.id}`), {
      dislikes: arrayUnion(getAuth().currentUser.uid),
      likes: arrayRemove(getAuth().currentUser.uid),
    });
  }

  public signOut() {
    signOut(getAuth());
    localStorage.removeItem('user');
    this.menu.close();
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

  public async presentLoadingDefault(message: string) {
    this.loading = await this.loadingCtrl.create({
      message: `<b>${message}</b>`,
    });
    await this.loading.present();
  }

  public async dismissLoading() {
    this.loading.dismiss();
  }

}
