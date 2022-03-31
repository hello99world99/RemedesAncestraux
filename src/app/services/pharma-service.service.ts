/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { arrayRemove, arrayUnion, collection, deleteDoc, doc, DocumentData, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { RemedeServiceService } from './remede-service.service';

@Injectable({
  providedIn: 'root'
})
export class PharmaServiceService {

  constructor(
    private appService: RemedeServiceService,
    private router: Router
  ) { }

  public async createPharma(uid: string, value: any, file: File) {
    const imagePath = `Pharmacopees/${getAuth().currentUser.uid}/Files/images/${file.name}`;
    const newImageRef = ref(getStorage(), imagePath);
    const imageSnapshot = await uploadBytesResumable(newImageRef, file).then(async (state) => {
      const publicImageUrl = await getDownloadURL(newImageRef);
      value.image = publicImageUrl;
      value.state = 'waiting';
      value.follow = [];
      await setDoc(doc(getFirestore(), 'Pharmacopees', uid), value);
    });
    this.router.navigateByUrl('/gerer');
  }

  public async getPharma(uid: string) {
    const docRef = await getDoc(doc(getFirestore(), `Pharmacopees/${uid}`));
    if (docRef.get('status') === 'desactivated') {
      return null;
    }else{
      return await docRef;
    }
  }

  public async getAllPharma(){
    const q = query(collection(getFirestore(), 'Pharmacopees'));
    return await getDocs(q);
  }

  public async getOwnerInfos(uid: string) {
    const docRef = await getDoc(doc(getFirestore(), `Users/${uid}`));
    return await docRef;
  }

  public async getIllnessRemedies(cim: string, child: string) {
    const q = query(collection(getFirestore(), 'Remedes'), where('state', '==', 'activated'), where('cim', '==', cim), where('children', '==', child));
    return await getDocs(q);
  }

  /**
   *Get a remedy by its id
   *
   * @memberof PharmaServiceService
   */
  public async getActivatedRemedy(uid: string) {
    const docRef = doc(getFirestore(), 'Remedes', uid);
    return await getDoc(docRef);
  }

  public async getMyRemedies(uid: string) {
    const docRef = query(collection(getFirestore(), 'Remedes'), where('state', '==', 'activated'), where('pharmacopee', '==', uid));
    return await getDocs(docRef);
  }

  /**
   *Get remedy for a specified user.
   *
   * @memberof PharmaServiceService
   */
  public async getRemedes(userUid: string) {
    const q = query(collection(getFirestore(), `Remedes`), where('state', '==', 'activated'), where('pharmacopee', '==', userUid));
    return await getDocs(q);
  }

  /**
   *When searching for remedies
   *
   * @memberof PharmaServiceService
   */
  public async findRemedes() {
    const docRef = query(collection(getFirestore(), 'Remedes'), where('state', '==', 'activated'));
    return await getDocs(docRef);
  }

  public async addRemedyToBookmark(data: DocumentData){
    await updateDoc(doc(getFirestore(), `Remedes/${data?.id}`), {
      bookmarks: arrayUnion(getAuth().currentUser.uid)
    });
    await setDoc(doc(getFirestore(), `Favorites/${getAuth().currentUser.uid}/Remedes/${data?.id}`), {
      uid: data?.id,
      created: serverTimestamp()
    });
    this.appService.presentToast('Remède ajouté avec succès', 'light');
  }

  public async removeRemedyFromBookmark(data: DocumentData){
    await updateDoc(doc(getFirestore(), `Remedes/${data?.id}`), {
      bookmarks: arrayRemove(getAuth().currentUser.uid)
    });
    await deleteDoc(doc(getFirestore(), `Favorites/${getAuth().currentUser.uid}/Remedes/${data?.id}`));
    this.appService.presentToast('Remède enlevé du bookmark', 'light');
  }

  public async getFavoritesRemedy(){
    const array: DocumentData[] = [];
    const q = query(collection(getFirestore(), `Favorites/${getAuth().currentUser.uid}/Remedes`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (data) => {
      const result = await this.getRemedyById(data.get('uid'));
      array.push(result);
    });
    return array;
  }

  public async getRemedyById(uid: string){
    const docRef = doc(getFirestore(), `Remedes/${uid}`);
    return await getDoc(docRef);
  }

  public async getRemedyByIllnessAndState(child: string){
    const q = query(collection(getFirestore(), 'Remedes'), where('state', '==', 'activated'), where('children', '==', child));
    return getDocs(q);
  }
}
