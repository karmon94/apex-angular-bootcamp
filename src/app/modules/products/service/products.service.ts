import { Injectable } from '@angular/core';
import { itemsMock } from '../mocks/items.mock';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  items: Item[] = itemsMock;

  constructor() {}

  getItems(): Item[] {
    return this.items;
  }

  getItemById(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
}
