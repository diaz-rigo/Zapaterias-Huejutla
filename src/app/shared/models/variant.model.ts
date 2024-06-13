export interface Variant {
  _id: string;
  color: string;
  texture: string;
  sizeStock: { size: number; stock: number; price: number; }[];
  images: string[];
}
