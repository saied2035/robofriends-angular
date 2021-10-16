import { Component,Input,OnInit } from '@angular/core';
import {item} from '../customVars';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   
   @Input()
   item!:item
  constructor() { }

  ngOnInit(): void {
  }


}
