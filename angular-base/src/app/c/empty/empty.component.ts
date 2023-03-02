import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `'./empty.component.html'`,
  styles: [],
})
export class EmptyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
