export class FilteringVariable {
  constructor(
    private brand: string[],
    private category: string[],
    private color: string[],
    private discount: number,
    private gender: string[],
    private maxPrice: number,
    private minPrice: number,
    private order: string,
    private searchedItem:string
  ) {}
}
