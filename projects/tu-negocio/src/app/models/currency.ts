export interface Currency {
  rates: Rates;
  base: string;
  date: string;
}

export interface Rates {
  CAD: number;
  EUR: number;
  USD: number;
}
