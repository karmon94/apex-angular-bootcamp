import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() imgs!: string[];

  currentImg: number = 0;

  constructor() {}

  ngOnInit(): void {}

  previousClicked(): void {
    const previous = this.currentImg - 1;
    this.currentImg = previous < 0 ? this.imgs.length - 1 : previous;
  }

  nextClicked(): void {
    const next = this.currentImg + 1;
    this.currentImg = next === this.imgs.length ? 0 : next;
  }
}
