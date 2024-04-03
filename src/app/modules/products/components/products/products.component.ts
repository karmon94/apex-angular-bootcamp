import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  items!: Item[];
  pageItems!: Item[];

  currentPage: number = 0;
  limit: number = 5;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.productService.getItems();
    this.pageItems = this.items.slice(0, this.limit);
  }

  productClicked(item: Item): void {
    this.router.navigate(['/products', item.id]);
  }

  changePage(page: number): void {
    this.currentPage = page - 1;
    const offset = (page - 1) * this.limit;
    this.pageItems = this.items.slice(offset, offset + this.limit);
  }
}
