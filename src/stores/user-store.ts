import { defineStore } from 'pinia';
import {dish,beverage, useDishStore} from './menu-store'
import { cartItem, cartItemBeverage } from './cart-store';
export interface order {
  dishs: cartItem[];
  beverage:cartItemBeverage[];
  total: number;
  date: Date;
}
const _orders:order[] = [{dishs: [{quantity: 3, dish: {name:'magherita', price:9, ingredients:[{name:'farina'},{name:'mozzarella'}], tipology:'pizza romana'}}, {quantity: 3, dish: {name:'diavola', price:9, ingredients:[{name:'farina'},{name:'mozzarella'}], tipology:'pizza romana'}}], beverage:[], total: 27, date:new Date(2023, 8, 22)}, {dishs: [{quantity: 3, dish: {name:'magherita', price:9, ingredients:[{name:'farina'},{name:'mozzarella'}], tipology:'pizza romana'}}, {quantity: 3, dish: {name:'diavola', price:9, ingredients:[{name:'farina'},{name:'mozzarella'}], tipology:'pizza romana'}}], beverage:[], total: 27, date:new Date(2023, 8, 22)}]

export const useUserStore = defineStore('user', {
  state: () => ({
    logged: false,
    orders: _orders
  }),
  getters: {
    getLogged: (state) => state.logged,
    getName: ()=> "massimo",
    getOrders: (state)=>state.orders
  },
  actions: {
    login(){
        this.logged = true
    }
  },
});
