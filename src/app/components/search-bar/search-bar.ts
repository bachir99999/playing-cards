import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Input() search = '';

  @Output() searchButtonClicked = new EventEmitter();
searchClick(){
  this.searchButtonClicked.emit();
};

}
