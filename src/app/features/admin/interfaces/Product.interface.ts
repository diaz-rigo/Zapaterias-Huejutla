export interface IRating {
  average: number;
  reviews: string[]; // O cualquier otra estructura que necesites para las revisiones
}

export interface IVariant {
  _id: string;
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
  ratings: IRating; // Agregar el campo ratings
}
