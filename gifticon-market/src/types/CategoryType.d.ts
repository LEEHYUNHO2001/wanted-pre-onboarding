import { ConItem } from './ItemType';

export interface Category {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conItems: ConItem;
}

export interface ConCategory1 {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  createdAt?: string;
  priority?: number;
  info?: string;
  conItems: ConItem;
}

export interface ConCategory2 {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conCategory1: ConCategory1;
  info?: any;
  adminUserId?: number;
  priority?: number;
  createdAt?: string;
  conItems: conItem[];
}
