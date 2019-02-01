import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import {Injectable} from '@angular/core'
import{ AppservicesService } from './appservices.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalModule } from './global.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    SidebarComponent,
    ProductDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    NgbModule.forRoot(),
    ModalDialogModule.forRoot()
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
