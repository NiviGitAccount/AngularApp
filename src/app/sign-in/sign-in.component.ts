import { Component, OnInit } from '@angular/core';
import {SignInService} from './sign-in.service';
import { SessionStorageService} from 'ngx-webstorage';
import { sha256, sha224 } from 'js-sha256';
import {NgForm} from '@angular/forms';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInData = new Map();
  //////public CData: string;
  responseData : any;
  invalidCred : boolean;
  modalBody : string;
  constructor(private signInService: SignInService,sessionStorage : SessionStorageService,
    private modalService: NgbModal) { 
    this.invalidCred = false;
  }

  ngOnInit() {
   
  }

  onSubmit(f: NgForm,content){
    this.signInData=JSON.parse(JSON.stringify(f));
    this.signInData['password'] = sha256(this.signInData['password']);
    this.signInService.getAllArticles(this.signInData)
     .subscribe(data => 
      {
        this.responseData= data;
        if(this.responseData.message == 'not found'){
          this.invalidCred = true;
          this.modalBody="Invalid user";
          this.modalService.open(content, { centered: true });
          
        }else{
          sessionStorage.clear();
          sessionStorage.setItem('email',this.signInData['email']);
          sessionStorage.setItem('password',this.signInData['password']);
          this.invalidCred = false;
          this.modalBody="Success";
          this.modalService.open(content, { centered: true });
        }
     });   
  }
}
