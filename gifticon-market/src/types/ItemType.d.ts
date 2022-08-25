export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
  createdAt?: string;
  sfId?: string;
  ncSellingPrice?: number;
  information?: any;
  tip?: any;
  warning: string;
  discountRate?: number;
  askingPrice?: number;
  isRefuse?: number;
  isBlock?: number;
  info?: any;
  isOnlyAccount?: number;
  conCategory2Id?: number;
  conCategory2?: ConCategory2;
  options: Options[];
}

export interface Options {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface Description {
  label: string;
  text: string;
}
