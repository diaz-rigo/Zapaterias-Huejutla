import { environment } from 'src/environments/environment';
import { IproductResponse } from '../interfaces/Product.interface';

export class Categoria {
  _id: string;
  title: string;
  parent: string | null;
  path: string;
  status: string;

  constructor(data: any) {
    this._id = data._id || '';
    this.title = data.title || '';
    this.parent = data.parent || null;
    this.path = data.path || '';
    this.status = data.status || '';
  }
}
