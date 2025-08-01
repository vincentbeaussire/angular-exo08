import { Pipe, PipeTransform } from '@angular/core';

type Order = "asc" | "desc"

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[], order: Order): string[] {
    return order === "asc" ? [...value].sort() : [...value].sort().reverse()
  }

}
