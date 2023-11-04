import { defineStore} from 'pinia';
import {dish,beverage, useDishStore} from './menu-store'
export interface cartItem {
  dish: dish
  quantity:number;
}
export interface cartItemBeverage {
  beverage: beverage;
  quantity:number;
}
const store = useDishStore()
const _cart:cartItem[] = []
const _cartBeverage:cartItemBeverage[] = []
const _i: cartItem[] = store.menu.map((item) => ({ quantity: 0, dish: item }));
const _iBavarage: cartItemBeverage[] = store.begerage.map((item) => ({ quantity: 0, beverage: item }));


export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: _cart,
    cartBegerages:_cartBeverage,
    cartI: _i,
    cartIBavarage: _iBavarage
  }),
  getters: {
    getCart: (state) => state.cartI.filter(item => item.quantity > 0),
    getCartBeverage: (state) => state.cartIBavarage.filter(item => item.quantity > 0),
    getCountItem: (state) => state.cartI.filter(item => item.quantity > 0).reduce((acc, current) => acc + current.quantity, 0)+state.cartIBavarage.filter(item => item.quantity > 0).reduce((acc, current) => acc + current.quantity, 0),
    getTotal: (state) => state.cartI.filter(item => item.quantity > 0).reduce((acc, current) => acc + current.dish.price * current.quantity, 0)+state.cartIBavarage.filter(item => item.quantity > 0).reduce((acc, current) => acc + current.beverage.price * current.quantity, 0),
    getI: (state)=> state.cartI,
    getIBeverage:(state)=>state.cartIBavarage,

  },
  actions: {
    setCart(newCart:cartItem[]) {
      this.cart = newCart;
      console.log("setto storage carrello")
      console.log(this.cart)
    },
    addToCart(newCartItem:cartItem) {
      this.cart.push(newCartItem)
    },
    setBeverage(newCart:cartItemBeverage[]) {
      this.cartBegerages = newCart;
    },
    setIAtIndex(index:number,newI:number){
      console.log("CAMBIOOOOOOOO i ")
      this.cartI[index].quantity = newI
    },
    incrementDish(item:cartItem){
      this.cartI[this.cartI.indexOf(item)].quantity = this.cartI[this.cartI.indexOf(item)].quantity + 1
    },
    decrementDish(item:cartItem){
      this.cartI[this.cartI.indexOf(item)].quantity = this.cartI[this.cartI.indexOf(item)].quantity - 1
    },
    setIBeverageAtIndex(index:number,newI:number){
      console.log("CAMBIOOOOOOOO i BBB ")
      this.cartIBavarage[index].quantity = newI
    },
    incrementBeverage(item:cartItemBeverage){
      this.cartIBavarage[this.cartIBavarage.indexOf(item)].quantity = this.cartIBavarage[this.cartIBavarage.indexOf(item)].quantity + 1
    },
    decrementBeverage(item:cartItemBeverage){
      this.cartIBavarage[this.cartIBavarage.indexOf(item)].quantity = this.cartIBavarage[this.cartIBavarage.indexOf(item)].quantity - 1
    }
  },
});
