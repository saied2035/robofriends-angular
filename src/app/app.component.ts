import { Component,} from '@angular/core';
import {item} from './customVars';
import {getData} from './functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  robots!: Array<item>
  filteredRobots!: Array<item>
   async ngOnInit() : Promise<void> {
 	  this.robots = await getData()
    this.filteredRobots = this.robots
   }
   onSearchChange(value:string){
     if(value.length)
       this.filteredRobots =this.robots.filter((item:item) => item.name.toLowerCase().includes(value.toLowerCase()))
     else{
       this.filteredRobots = this.robots
     }    
   }
}
