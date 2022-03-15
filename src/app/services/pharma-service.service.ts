import { Injectable } from '@angular/core';
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PharmaServiceService {

  constructor() { }

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
    const docRef = await getDocs(q);
    return await docRef;
  }

  public async getRemedesFromCIM(uid: string, remedeRef: DocumentData) {
    const docRef = await getDoc(doc(getFirestore(), `CIM/${remedeRef.cim}/Children/${remedeRef.children}/Remedes/${uid}`));
    return await docRef;
  }
}
