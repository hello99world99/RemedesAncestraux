import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/models';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.page.html',
  styleUrls: ['./sign-in-page.page.scss'],
})
export class SignInPagePage implements OnInit {

  public user: Observable<User>;
  constructor(
    private mService: AppServiceService,
    private router: Router,
    private auth: AngularFireAuth
  ) {
  }

  ngOnInit() {
  }

  public onSignInSubmit(){
    console.log('Great from onSignInSubmit...');
  }

  public async signWithGoogle(){
    await this.mService.signWithGoogle();
    this.router.navigateByUrl('/');
  }


  public signIn(data: any){}

  logout() {
    // this.auth.signOut();
  }

  getCurrentUser(){}

}
