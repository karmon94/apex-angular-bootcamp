import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  items!: Item[];
  filteredItems!: Item[];

  currentPage: number = 0;
  limit: number = 5;

  showDiscounts: boolean = false;

  searchCriteria = new FormControl('');
  formSub = new Subscription();
  productSub = new Subscription();

  constructor(
    private productService: ProductsService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productSub = this.productService.getItems().subscribe((items) => {
      this.items = items;
      this.filteredItems = this.items;
      this.getPageItems();
    });

    this.formSub = this.searchCriteria.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.searchItems());
  }

  productClicked(item: Item): void {
    this.router.navigate(['/products', item.id]);
  }

  changePage(page: number): void {
    this.currentPage = page - 1;
    this.getPageItems();
  }

  getPageItems() {
    const offset = this.currentPage * this.limit;
    return this.filteredItems.slice(offset, offset + this.limit);
  }

  searchItems(): void {
    let newItems: Item[] = [];
    this.currentPage = 0;

    if (this.showDiscounts) {
      newItems = this.getItemsWithDiscount();
      newItems = this.filterItems(newItems, this.searchCriteria.value!);
    } else {
      newItems = this.filterItems(this.items, this.searchCriteria.value!);
    }

    this.filteredItems = newItems;
    this.getPageItems();
  }

  filterItems(items: Item[], criteria: string): Item[] {
    return items.filter((item) =>
      item.title.toLowerCase().includes(criteria.toLowerCase())
    );
  }

  getItemsWithDiscount(): Item[] {
    return this.items.filter((item) => item.offerDiscount);
  }

  openNewProduct(): void {
    const dialogRef = this.dialog.open(NewProductComponent, {
      width: '50%',
      height: '900px',
      maxHeight: '900px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((resp) => console.log(resp));
  }

  ngOnDestroy(): void {
    console.log('destroyed');
    this.formSub.unsubscribe();
    this.productSub.unsubscribe();
  }
}
