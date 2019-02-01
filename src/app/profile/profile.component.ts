import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import { SessionStorageService} from 'ngx-webstorage';
import { sha256, sha224 } from 'js-sha256';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateFlag : boolean;
  currentBackupUser = {email:'',email_id:'',password:'',first_name:'',last_name:'',phone:'',alt_phone:''};
  currentUser ={email:'',email_id:'',password:'',first_name:'',last_name:'',phone:'',alt_phone:'',methodFlag:''};
  constructor(private profileService: ProfileService,sessionStorage : SessionStorageService,private modalService: NgbModal) { 
  }

  ngOnInit() {
    this.currentUser.email=sessionStorage.getItem('email');
    this.currentUser.password=sessionStorage.getItem('password');
    this.currentUser.methodFlag="show";
    this.profileService.getAllArticles(this.currentUser)
    .subscribe(data => 
     {
       console.log(data['profileData'])
      this.currentBackupUser.first_name=data['profileData']['first_name'];
         this.currentBackupUser.last_name=data['profileData']['last_name'];
         this.currentBackupUser.phone=data['profileData']['phone_number'];
         this.currentBackupUser.alt_phone=data['profileData']['alt_phone_number'];
         this.currentBackupUser.email_id=this.currentUser.email;

         this.currentUser.first_name=data['profileData']['first_name'];
         this.currentUser.last_name=data['profileData']['last_name'];
         this.currentUser.phone=data['profileData']['phone_number'];
         this.currentUser.alt_phone=data['profileData']['alt_phone_number'];
         this.currentUser.email_id=this.currentUser.email;
     }); 
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  onSubmit(formData : any){
    formData.methodFlag="update";
    formData.email=this.currentUser.email;    
    this.profileService.getAllArticles(formData)
     .subscribe(data => 
      {
        // BootstrapDialog.show({
        //   title: 'Example',
        //     message: 'Write your example here.',
        //     buttons: [{
        //        label: 'Close',
        //         action: function(dialog) {
        //           dialog.close();
        //         }
        //     }]
        // });
     });   
  }
}
