import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent }      from './sign-in/sign-in.component';
import { SignUpComponent }  from './sign-up/sign-up.component';


const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent }
  
    /*{ path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }*/
  ];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}