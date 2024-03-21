import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true,
})
export class CapitalizeDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.textTransform = 'Capitalize';
  }
}
