export interface Item {
  id: string;
  title: string;
  prices: { [tag: string]: number };
  offerDiscount?: number;
  photos: string[];
  description: string;
}
