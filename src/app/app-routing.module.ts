import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent }      from './sign-in/sign-in.component';
import { SignUpComponent }  from './sign-up/sign-up.component';
import {ProfileComponent} from './profile/profile.component';
import {ModalComponent} from './modal/modal.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'modal', component: ModalComponent }
  ];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}