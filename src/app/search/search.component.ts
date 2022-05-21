import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() userInput: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  searchThis(event: KeyboardEvent) {
    this.userInput.emit((event.target as HTMLInputElement).value);
  }
}
