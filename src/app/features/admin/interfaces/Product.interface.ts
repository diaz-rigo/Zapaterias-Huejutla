import { Size } from "../../public/commons/components/detail-info/detail-info.component";

export interface IproductResponse {
  _id: string;
  sku: string;
  name: string;
  description: string;
  brand: string;
  color: string;
  size: string;
  material: string;
  gender: string;
  ageGroup: string;
  quantity: number;
  price: number;
  category: string;
  images: string[]; // Array de URLs de imágenes
  status: string;
  weight: number;
  promotions: any[]; // Array de objetos de promociones (ajustar según estructura real)
  discounts: any[]; // Array de objetos de descuentos (ajustar según estructura real)
  specialOffers: any[]; // Array de objetos de ofertas especiales (ajustar según estructura real)
  sales: any[]; // Array de objetos de ventas (ajustar según estructura real)
  paymentMethods: any[]; // Array de objetos de métodos de pago (ajustar según estructura real)
  shippingMethods: any[]; // Array de objetos de métodos de envío (ajustar según estructura real)
  tags: string[]; // Array de etiquetas
  createdAt: string; // Fecha de creación en formato ISO8601
  updatedAt: string; // Fecha de actualización en formato ISO8601
  sizes: Size[]; // Agrega este campo

}
