export interface Inventario {
  _id: string;
  name: string;
  creationDate: Date;
  descripcion: string;
  lang: string;
  uID: string;
}

export interface MaxPriceInv {
  _id: string;
  name : string;
  sumTotal: number;
}

export interface MaxProdInv {
  _id: string;
  name : string;
  totalUniqueProducts: number;
}


export interface qPersoInv {
  _id : String;
  count : number;
  descripcion : string;
  name : String;
}

export interface ResultQ{
  query : String;
}