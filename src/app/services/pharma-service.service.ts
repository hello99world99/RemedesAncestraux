import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PharmaServiceService {

  constructor() { }

  public async getPharma(uid: string) {
    const docRef = await getDoc(doc(getFirestore(), `Pharmacopees/${uid}`));
    return await docRef;
  }
}
