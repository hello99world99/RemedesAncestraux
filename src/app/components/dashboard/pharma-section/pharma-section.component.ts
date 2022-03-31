import { Component, OnInit } from '@angular/core';
import { PharmaServiceService } from '../../../services/pharma-service.service';
import { doc, DocumentData, getFirestore, updateDoc } from 'firebase/firestore';
import { RemedeServiceService } from 'src/app/services/remede-service.service';

@Component({
  selector: 'app-pharma-section',
  templateUrl: './pharma-section.component.html',
  styleUrls: ['./pharma-section.component.scss'],
})
export class PharmaSectionComponent implements OnInit {

  public pharmas: DocumentData[] = [];
  public skeleton = true;
  constructor(
    private pharmaService: PharmaServiceService,
    private appService: RemedeServiceService
  ) { }

  async ngOnInit() {
    this.getAllPharma();
  }

  public async getAllPharma() {
    this.pharmas = [];
    const results = await this.pharmaService.getAllPharma();
    results.forEach((data) => {
      this.pharmas.push(data);
    });
    this.skeleton = false;
  }

  public async desactivatePharma(pharma: DocumentData) {
    const cimRef = doc(getFirestore(), 'Pharmacopees', pharma?.id);
    await updateDoc(cimRef, {
      state: 'desactivated',
    }).then(async (result) => {
      await this.getAllPharma();
      this.appService.presentToast('Pharmacopée desactivé avec succèss', 'danger');
    });
  }

  public async activatePharma(pharma: DocumentData) {
    const cimRef = doc(getFirestore(), 'Pharmacopees', pharma?.id);
    await updateDoc(cimRef, {
      state: 'activated',
    }).then(async (result) => {
      await this.getAllPharma();
      this.appService.presentToast('Pharmacopée reactivaté avec succèss', 'light');
    });
  }

}
