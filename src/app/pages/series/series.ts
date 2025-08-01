import { Component } from '@angular/core';
import { SortPipe } from '../../utils/pipes/sort-pipe';

type Order = "asc" | "desc"

@Component({
  selector: 'app-series',
  imports: [SortPipe],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  series : string[] = ["Série 1", "Série 2", "Série 3"]
  order : Order = "desc"

  setOrder(order: Order) : void {
    this.order = order
  }

  removeSerie(index : number) : void {
    // this.series.splice(index,1)
    this.series = this.series.filter((_, i) => i != index)
  }
}
