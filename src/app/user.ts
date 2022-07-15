import { ShoppingCart } from './shopping-cart';

export class User {
  constructor(
    public first_name: string,
    public last_name: string,
    public username: string,
    public password: string,
    public phoneNumber: string,
    public address: string,
    public cart: ShoppingCart | null = null,
    public role:string="ROLE_USER",
    public id:number=0
  ) {}
}
