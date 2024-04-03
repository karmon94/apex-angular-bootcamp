import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topRound',
  standalone: true,
})
export class TopRoundPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    console.log(this.roundTo(value, 2).toFixed(2));
    // console.log(Math.ceil(value));
    return value.toFixed(2);
  }

  roundTo(num: number, places: number): number {
    const factor = 100 ** places;
    return Math.round(num * factor) / factor;
  }
}
