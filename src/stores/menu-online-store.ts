import { defineStore } from 'pinia';
export interface dish {
    name:string;
    price:number;
    priceSmall:number;
    ingredients:ingredient[]
    tipology:string
}
interface ingredient{
    name:string;
    id: number;
}
export interface beverage{
  name:string;
  price:number;
}
const res = await fetch('http://localhost:8080/query', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    getDishs {
                        id
                        nameDish
                        ingredients {
                            id
                            nameIngredient
                        }
                        price
                        priceSmall
                    }
                }`}),
        })
        const resp = await res.json();
        const requestIngredient = await fetch('http://localhost:8080/query', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    getIngredients {
                        id
                        nameIngredient
                      }
                }`}),
        })
        console.log(requestIngredient)
        const respIngredient = await requestIngredient.json();
        console.log(respIngredient)
const _dishes:dish[] = resp.data.getDishs
const _ingredients:ingredient[] = respIngredient.data.getIngredients
export const useDishStoreOnline = defineStore('dishesOnline', {
  state: () => ({
    dishes: _dishes,
    ingredients: _ingredients
  }),
  getters: {
    menu: (state) => state.dishes,
    getIngredients: (state) => state.ingredients
  },
  actions: {
  },
});
