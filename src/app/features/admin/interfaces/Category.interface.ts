export interface CategoriaInterface {
  _id: string;
  title: string;
  parent: string | null;
  path: string;
  status: string;
}
