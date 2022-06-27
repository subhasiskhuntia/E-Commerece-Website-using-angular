import { Product } from "./product";

export class OrderItem {
    constructor(
        public id:number,
        public product:Product,
        public quantity:number
    ){}
}
