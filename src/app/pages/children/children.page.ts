/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { collection, getDocs, getFirestore, query, DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
})
export class ChildrenPage implements OnInit {

  public children: any[] = [];
  public remedesCount: any[] = [];
  public cim: DocumentSnapshot<DocumentData>;
  private db = getFirestore();
  private uid: string;
  constructor(
    private appService: RemedeServiceService,
    private activeRoute: ActivatedRoute,
    private app: AppComponent,
    private router: Router
  ) {}

  async ngOnInit() {
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    this.uid = this.activeRoute.snapshot.paramMap.get('uid');
    this.cim = await this.appService.getCIM(this.uid);
    await this.getChildren();
  }

  public async getChildren(){
    const querySnapshot = await this.appService.getActivatedChildren(this.uid);
    await querySnapshot.forEach((data) => {
      this.children.push(data);
    });

    this.children.forEach(async (child) => {
      const r = query(collection(this.db, 'CIM/'+this.uid+'/Children/'+child[0]+'/Remedes'));
      const remedeSnapshot = await getDocs(r);
      await remedeSnapshot.forEach((document) => {
        this.remedesCount.push();
      });
    });
    this.appService.dismissLoading();
  }

  public showDetails(uid: string) {
    this.router.navigate(['details', {
      cim: this.uid,
      child: uid
    }]);
  }

  public async doRefresh(event) {
    await this.ngOnInit();
    await this.app.ngOnInit();
    await event.target.complete();
  }

}
