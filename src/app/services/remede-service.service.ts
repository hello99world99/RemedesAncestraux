import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class RemedeServiceService {

  private db = getFirestore();
  constructor() {
  }

}
