import { Size } from "../../public/commons/components/detail-info/detail-info.component";
import { IproductResponse } from "../interfaces/Product.interface";

export class ProductResponse {
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



  constructor(data?: IproductResponse) {
    this._id = data?._id ?? '';
    this.sku = data?.sku ?? '';
    this.name = data?.name ?? '';
    this.description = data?.description ?? '';
    this.brand = data?.brand ?? '';
    this.color = data?.color ?? '';
    this.size = data?.size ?? '';
    this.material = data?.material ?? '';
    this.gender = data?.gender ?? '';
    this.ageGroup = data?.ageGroup ?? '';
    this.quantity = data?.quantity ?? 0;
    this.price = data?.price ?? 0;
    this.category = data?.category ?? '';
    this.images = data?.images ?? [];
    this.status = data?.status ?? '';
    this.weight = data?.weight ?? 0;
    this.promotions = data?.promotions ?? [];
    this.discounts = data?.discounts ?? [];
    this.specialOffers = data?.specialOffers ?? [];
    this.sales = data?.sales ?? [];
    this.paymentMethods = data?.paymentMethods ?? [];
    this.shippingMethods = data?.shippingMethods ?? [];
    this.tags = data?.tags ?? [];
    this.createdAt = data?.createdAt ?? '';
    this.updatedAt = data?.updatedAt ?? '';
    this.sizes = data?.sizes ?? []; // Inicializa sizes con un array vacío si no está definido en data


  }
  getNameUpperCase(name: string): string {
    return name.toUpperCase();
  }
}
