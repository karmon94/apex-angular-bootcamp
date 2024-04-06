import { Injectable } from '@angular/core';
import { itemsMock } from '../mocks/items.mock';
import { Item } from '../models/item.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private items$: BehaviorSubject<Item[]> = new BehaviorSubject(itemsMock);

  constructor() {}

  getItems(): Observable<Item[]> {
    return this.items$;
  }

  getItemById(id: string): Item | undefined {
    return this.items$.value.find((item) => item.id === id);
  }

  addItem(item: Item): void {
    const currentItems = this.items$.value;
    const updatedValue = [...currentItems, item];
    this.items$.next(updatedValue);
  }
}
