import { Component,} from '@angular/core';
import {item} from './customVars';
import {getData} from './functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  users!: Array<item>
   async ngOnInit() : Promise<void> {
 	 this.users = await getData()
   }
   async onSearchChange(value:string){
     this.users = await getData(value)
   }
}
