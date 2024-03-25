import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCapitalize',
  standalone: true,
})
export class CustomCapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const textTrans = value
      .split(' ')
      .map((sub) => sub[0].toUpperCase() + sub.slice(1))
      .join(' ');

    return textTrans;
  }
}
