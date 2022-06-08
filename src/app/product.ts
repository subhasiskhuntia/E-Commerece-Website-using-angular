import { Brand } from "./brand;";
import { Category } from "./category;";
import { Discount } from "./discount;";
import { Gender } from "./gender;";
import { Images } from "./images;";
import { ProductSizeAndQuantity } from "./product-size-and-quantity";

export class Product {
    constructor(
        public id:number=0,
        public name:string,
        public description:string,
        public sku:string,
        public color:string,
        public images:Images,
        public gender:Gender,
        public category:Category,
        public discount:Discount,
        public brand:Brand,
        public sizeAndQuantity:ProductSizeAndQuantity[]
        ){}
}
