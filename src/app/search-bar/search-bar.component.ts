import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    
   @Output() searchValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSearchChange(value:string) {
  	this.searchValue.emit(value)
  }

}
