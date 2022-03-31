/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { PharmaServiceService } from '../services/pharma-service.service';
import { RemedeServiceService } from '../services/remede-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public pharma$: DocumentData;
  constructor(
    private appService: RemedeServiceService,
    private pharmaService: PharmaServiceService
  ) {}

  public async ngOnInit(){
    await this.getPharma();
  }

  public async getPharma() {
    this.pharma$ = await this.pharmaService.getPharma(getAuth().currentUser.uid);
  }

  public chooseImage(){
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
    imageInput.addEventListener('change', (e) => {
      this.updateImage(e.target['files'][0]);
    });
  }

  public async updateImage(image: File){
    this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
    const imagePath = `Files/images/cim/${image.name}`;
    const newImageRef = ref(getStorage(), imagePath);
    const imageSnapshot = await uploadBytesResumable(newImageRef, image);
    const publicImageUrl = await getDownloadURL(newImageRef);
    await updateDoc(doc(getFirestore(), `Pharmacopees/${this.pharma$?.id}`),
      {
        image: publicImageUrl,
      }
    );
    await this.getPharma();
    await this.appService.dismissLoading();
  }

  public async updatePharma(data: any) {
    console.log(data.value);
    if (data.valid) {
      await updateDoc(doc(getFirestore(), `Pharmacopees/${this.pharma$?.id}`), data.value);
      this.getPharma();
      await this.appService.presentToast('<b>Mise en jour de la pharmacopée ajoutée avec succèss...</b>', 'light');
    }else{
      this.appService.presentToast('<b>Veuillez renseigner correctement tous les champs...</b>', 'danger');
    }
  }

}
