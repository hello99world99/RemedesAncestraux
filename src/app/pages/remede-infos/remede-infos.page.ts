import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentData, getDoc } from 'firebase/firestore';
import { PharmaServiceService } from '../../services/pharma-service.service';

@Component({
  selector: 'app-remede-infos',
  templateUrl: './remede-infos.page.html',
  styleUrls: ['./remede-infos.page.scss'],
})
export class RemedeInfosPage implements OnInit {

  public pharma: DocumentData;
  public remede: any;
  public owner: DocumentData;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private pharmaService: PharmaServiceService
  ) {}

  async ngOnInit() {
    this.remede = JSON.parse(this.activeRoute.snapshot.paramMap.get('remede'));
    const docSnap = this.pharmaService.getPharma(this.remede[1].pharmacopee);
    const photoPath = this.pharmaService.getOwnerPhoto(this.remede[1].pharmacopee);
    this.pharma = await (await docSnap).data();
    this.owner = await (await photoPath).data();
  }

}
