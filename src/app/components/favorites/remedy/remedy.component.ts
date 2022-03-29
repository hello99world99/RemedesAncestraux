import { Component, OnInit } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { PharmaServiceService } from '../../../services/pharma-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.scss'],
})
export class RemedyComponent implements OnInit {

  public remedies: DocumentData[] = [];
  constructor(
    private pharmaService: PharmaServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.remedies = await this.pharmaService.getFavoritesRemedy();
  }

  public showDetails(remedy: DocumentData) {
    this.router.navigate(['/remede-infos', {
      uid: remedy?.id
    }]);
  }

}
