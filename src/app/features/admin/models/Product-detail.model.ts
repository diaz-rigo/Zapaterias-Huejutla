
export interface IVariant {
  images: string[];
  color: string;
  texture: string;
  sizeStock: ISizeStock[];
}

export interface ISizeStock {
  size: number;
  stock: number;
  price: number;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  brand: string;
  material: string;
  category: string;
  variants: IVariant[];
}

export class ProductResponse implements IProduct {
  _id: string;
  name: string;
  description: string;
  brand: string;
  material: string;
  category: string;
  variants: IVariant[];

  constructor(data?: IProduct) {
    this._id = data?._id ?? '';
    this.name = data?.name ?? '';
    this.description = data?.description ?? '';
    this.brand = data?.brand ?? '';
    this.material = data?.material ?? '';
    this.category = data?.category ?? '';
    this.variants = data?.variants ?? [];
  }
}
