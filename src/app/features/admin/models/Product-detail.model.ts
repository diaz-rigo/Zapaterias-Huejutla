import { IproductResponse } from "../interfaces/Product.interface";

export class ProductDetail {
  _id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  quantity: number;

  constructor(data?: IproductResponse) {
    this._id = data?._id ? data._id : '';
    this.sku = data?.sku ? data.sku : '';
    this.name = data?.name ? this.getNameUpperCase(data.name) : '';
    this.description = data?.description ? data.description : '';
    this.price = data?.price ? data.price : 0;
    this.images = data?.images ? data.images : [];
    this.quantity = data?.quantity ? Number(data.quantity) : 0;
  }

  getNameUpperCase(name: string): string {
    return name.toUpperCase();
  }
}


