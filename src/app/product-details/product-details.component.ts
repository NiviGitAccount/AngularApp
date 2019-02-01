import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  proDetails(content){
    console.log("checkcheck")
    this.modalService.open(content, { centered: true });
  }
}
