import { Component, OnInit } from '@angular/core';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
})
export class ChildrenPage implements OnInit {

  public children: any[] = [];
  public remedesCount: any[] = [];
  public document: any;
  private db = getFirestore();
  private loading: any;
  constructor(
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {
    this.presentLoadingDefault();
    this.document = this.appService.getDocument();
    this.getChildren();
  }

  ngOnInit() {
  }

  public async getChildren(){
    const q = query(collection(this.db, 'CIM/'+this.document[0]+'/Children'), orderBy('chapitre'));
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((document) => {
      this.children.push([document.id, document.data()]);
    });
    this.children.forEach(async (child) => {
      const r = query(collection(this.db, 'CIM/'+this.document[0]+'/Children/'+child[0]+'/Remedes'));
      const remedeSnapshot = await getDocs(r);

      await remedeSnapshot.forEach((document) => {
        this.remedesCount.push(child[0]);
      });
    });
    console.log(this.remedesCount);
    this.loading.dismiss();
  }

  public showDetails(uid: string) {
    const path = 'CIM/'+this.document[0]+'/Children/'+uid;
    this.appService.setPath(path);
    this.router.navigateByUrl('/details');
  }

  public async presentLoadingDefault() {
    this.loading = await this.loadingCtrl.create({
      message: '<span>Veuillez patienter...</span>',
    });
    await this.loading.present();
  }

}
