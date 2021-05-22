import {Technology} from "./technology";
import {Market} from "./market";

export interface Product {
  id: number;
  productName: string;
  stack: Technology[];
  targetMarket: Market[];
}
