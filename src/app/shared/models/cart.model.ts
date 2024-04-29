export class CartItem {
  id!: string;
  name!: string;
  precio!: number;
  cantidad!: number;
  image!: string[];
  specialInstructions?: string; // Agregar la propiedad specialInstructions opcional
}
