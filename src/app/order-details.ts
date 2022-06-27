import { OrderItem } from "./order-item";

export class OrderDetails {
    constructor(
        public id:number,
        public username:string,
        public paymentId:number,
        public totalPrice:number,
        public orderItem:OrderItem[]
    ){}
}
