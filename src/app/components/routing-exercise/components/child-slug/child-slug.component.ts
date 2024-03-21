import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-slug',
  standalone: true,
  imports: [],
  templateUrl: './child-slug.component.html',
  styleUrl: './child-slug.component.scss',
})
export class ChildSlugComponent {
  slug: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug');
    });
  }
}
