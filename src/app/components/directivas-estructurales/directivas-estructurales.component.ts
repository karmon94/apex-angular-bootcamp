import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivas-estructurales.component.html',
  styleUrl: './directivas-estructurales.component.scss',
})
export class DirectivasEstructuralesComponent {
  exampleArr: string[] = ['A', 'B', 'C'];
}
