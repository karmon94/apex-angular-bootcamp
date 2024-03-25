import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-de-atributo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivas-de-atributo.component.html',
  styleUrl: './directivas-de-atributo.component.scss',
})
export class DirectivasDeAtributoComponent {
  active: boolean = false;
}
