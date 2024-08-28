export interface Purchase {
  datoscliente: {
    name: string;
    maternalLastname: string;
    paternalLastname: string;
    phone: string;
    email: string;
  };
  direccion: {
    municipio: string;
    localidad: string;
    especificacion: string;
  };
  _id: string;
  totalneto: number;
  tipoEntrega: string;
  productos: Array<{
    id: string;
    variantId: string;
    name: string;
    precio: number;
    cantidad: number;
    image: string;
    size: number;
    color: string;
    _id: string;
  }>;
  success_url: string;
  stripeSessionId: string;
  codigoPedido: string;
  estadoEnvio: string;
  historialEnvio: Array<{
    estado: string;
    fechaCambio: string;
    _id: string;
  }>;
  actualizacionReciente: string;
  user: string;
  createdAt: string;
}
