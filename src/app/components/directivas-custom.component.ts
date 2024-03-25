import { Component } from '@angular/core';
import { CapitalizeDirective } from '../directive/capitalize.directive';

@Component({
  selector: 'app-directivas-custom',
  standalone: true,
  imports: [CapitalizeDirective],
  templateUrl: './directivas-custom.component.html',
  styleUrl: './directivas-custom.component.scss',
})
export class DirectivasCustomComponent {}
