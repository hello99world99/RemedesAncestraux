import { Component, OnInit } from '@angular/core';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
})
export class ChildrenPage implements OnInit {

  public children: any[] = [];
  public document: any;
  private db = getFirestore();
  private header: any;
  constructor(
    private appService: RemedeServiceService
  ) {
    this.document = this.appService.getDocument();
    this.getChildren();
  }

  ngOnInit() {
  }

  public async getChildren(){

    const querySnapshot = await getDocs(
      collection(this.db, 'CIM/'+this.document[0]+'/Children')
      // orderBy('chapitre')
    );

    await querySnapshot.forEach((document) => {
      const id = document.id;
      const result = [
        id, document.data()
    ];
      this.children.push(result);
    });
  }

}
