import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter : number = 0

  increment() : void {
    this.counter++
  }

  decrement() : void {
    this.counter--
  }

  get color(): string {
    return this.counter % 2 ? "red" : "green"
  }
}
