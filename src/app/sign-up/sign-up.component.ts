import { Component, OnInit,ViewChild,ElementRef,Input, Output ,EventEmitter} from '@angular/core';
import { SignUpService}  from './sign-up.service';
import { sha256, sha224 } from 'js-sha256';
import {userService} from '../user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpData : any;
  responseData : any;
  isDuplicate : boolean;
  @Input() emailFromParent : String;
  @Output() childEvent = new EventEmitter();
  onChange(value) {
    this.childEvent.emit(value);
  }
  @ViewChild('email') emailfield;
  constructor(private signUpService: SignUpService) { 
    this.isDuplicate = false;
  }
  user : userService;
   ngOnInit() {
  }

  onSubmit(formData : any){
    console.log(formData)
    this.signUpData = formData;
    this.signUpData.password=sha256(this.signUpData.password);
    this.signUpService.getAllArticles(this.signUpData)
     .subscribe(data => 
      {
        this.responseData= data;
       if(this.responseData.message === 'duplicate'){
        this.emailfield.nativeElement.focus()
        this.isDuplicate = true;
       }else{
        this.isDuplicate = false;
       }
     });   
  }

}
