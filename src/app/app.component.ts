import { Component } from '@angular/core';
import { sanitizeScript } from '@angular/core/src/sanitization/sanitization';
import{ AppservicesService } from './appservices.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  title = 'mine';
}
