import { NgModule } from '@angular/core';
import {userService} from './user';
@NgModule({
    providers: [ /* DONT ADD THE SERVICE HERE */ ]
  })
  export class GlobalModule {
    static forRoot() {
      return {
        ngModule: GlobalModule,
        providers: [ userService ]
      }
    }
  }