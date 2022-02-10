import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class RemedeServiceService {

  private document: any;
  private db = getFirestore();
  constructor() {
  }

  public signWithGoogle(){
    console.log('signing with google');
  }

  public getDocument(): any {
    return this.document;
  }

  public setDocument(child: any){
    this.document = child;
  }

}
