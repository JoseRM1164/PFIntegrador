export interface Reporte {
    _id: string;
    name: string;
    creationDate: Date;
    descripcion: string;
    lang: string;
    uID: string;
  }
  
  export interface MaxPriceInv {
    name: string;
    sumTotal: number;
  }
  
  export interface MaxProdInv {
    _id: string;
    totalUniqueProducts: number;
  }
  