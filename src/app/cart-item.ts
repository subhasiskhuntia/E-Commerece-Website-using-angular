import { Product } from './product';

export class CartItem {
  constructor(
    public id: number = 0,
    public quantity: number,
    public cartProduct: Product
  ) {}
}
