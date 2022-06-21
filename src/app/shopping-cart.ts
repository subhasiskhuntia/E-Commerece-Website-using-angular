import { CartItem } from './cart-item';

export class ShoppingCart {
  constructor(
    public id: number = 0,
    public cartItems: CartItem[] = [],
    public userName: string|null
  ) {}
}
