import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topRound',
  standalone: true,
})
export class TopRoundPipe implements PipeTransform {
  transform(value: number): string {
    return (Math.ceil(value * 2) / 2).toFixed(1);
  }
}
