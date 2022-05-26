import { IPizza } from '../../api/pizzaApiTypes';

export interface ICartSlice {
  items: IPizza[];
  totalPrice: number;
}
