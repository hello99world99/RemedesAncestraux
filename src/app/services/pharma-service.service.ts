import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class PharmaServiceService {

  constructor(
    private router: Router
  ) { }

  public async createPharma(uid: string, value: any, file: File) {
    const imagePath = `Pharmacopees/${getAuth().currentUser.uid}/Files/images/${file.name}`;
    const newImageRef = ref(getStorage(), imagePath);
    const imageSnapshot = await uploadBytesResumable(newImageRef, file).then(async (state) => {
      const publicImageUrl = await getDownloadURL(newImageRef);
      value.image = publicImageUrl;
      await setDoc(doc(getFirestore(), 'Pharmacopees', uid), value);
    });
    this.router.navigateByUrl('/gerer');
  }

  public async getPharma(uid: string) {
    const docRef = await getDoc(doc(getFirestore(), `Pharmacopees/${uid}`));
    return await docRef;
  }

  public async getOwnerInfos(uid: string) {
    const docRef = await getDoc(doc(getFirestore(), `Users/${uid}`));
    return await docRef;
  }

  public async getRemedes(uid: string) {
    const q = query(collection(getFirestore(), `Pharmacopees/${uid}/Remedes`));
    return await getDocs(q);
  }

  public async getRemedesFromCIM(uid: string, remedeRef: DocumentData) {
    return await getDoc(doc(getFirestore(), `CIM/${remedeRef.cim}/Children/${remedeRef.children}/Remedes/${uid}`));
  }
}
