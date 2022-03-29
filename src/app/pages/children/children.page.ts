import { Component, OnInit } from '@angular/core';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
import { collection, getDocs, getFirestore, query, orderBy, where, DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

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
  private loading: any;
  private uid: string;
  constructor(
    private appService: RemedeServiceService,
    private loadingCtrl: LoadingController,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.presentLoadingDefault();
    this.uid = this.activeRoute.snapshot.paramMap.get('uid');
    this.cim = await this.appService.getCIM(this.uid);
    this.getChildren();
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
    console.log(this.remedesCount);
    this.loading.dismiss();
  }

  public showDetails(uid: string) {
    const path = 'CIM/'+this.uid+'/Children/'+uid;
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
