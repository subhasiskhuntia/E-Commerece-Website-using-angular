export class Banner {
    constructor(public id:number,public url:string){};
    getBanner():string{
        return this.url;
    }
}
