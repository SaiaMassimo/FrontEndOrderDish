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
}
export interface beverage{
  name:string;
  price:number;
}
const _dishes:dish[] = [
  {name:'Marinara', price:8 , priceSmall:7, ingredients:[{name:'Pomodoro'},{name:'Aglio'},{name:'Origano'}], tipology:'Piazza Classica'},
  {name:'Margherita', price:9, priceSmall:8.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Basilico'}], tipology:'Piazza Classica'},
  {name:'Prosciutto', price:11, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Prosciutto cotto o crudo'}], tipology:'Piazza Classica'},
  {name:'Tonno e Cipolle', price:11, priceSmall:10.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Tonno'}, {name:'Cipolle'}], tipology:'Piazza Classica'},
  {name:'Olivia', price:10, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Olive Nere'},{name:'Olive Verdi'}], tipology:'Piazza Classica'},
  {name:'Quattro Formaggi', price:11, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Gorgonzola'},{name:'Taleggio'},{name:'Groviera'}], tipology:'Piazza Classica'},

  {name:'Bufalina', price:12, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Mozzarella di Bufala'},{name:'Pomodori Datterini'},{name:'Rucola'}], tipology:'Piazza Classica'},

  {name:'Zucchine', price:10, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Zucchine Verdi'},{name:'Zucchine Gialle'}], tipology:'Piazza Classica'},

  {name:'Speck e Zola', price:12, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Gorgonzola'},{name:'Spack'}], tipology:'Piazza Classica'},

  {name:'Spianata', price:10, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Spianata Calabrese'}], tipology:'Piazza Classica'},

  {name:'Salsiccia e Friarielli', price:12, priceSmall:9.50, ingredients:[{name:'Pomodoro'},{name:'Mozzarella fior di latte'},{name:'Salsiccia'},{name:'Friarielli'}], tipology:'Piazza Classica'},


]
const _beverages:beverage[] = [{name: 'cocacola', price: 3}, {name: 'fanta', price: 3}, {name: 'thè', price: 3}]
export const useDishStore = defineStore('dishes', {
  state: () => ({
    dishes: _dishes,
    begerage: _beverages
  }),
  getters: {
    menu: (state) => state.dishes,
    menuBeverage: (state) => state.begerage,
  },
  actions: {
  },
});

/*
{name:'Marinara', price:8 , priceSmall:7, ingredients:[{name:'Pomodoro San Marzano'},{name:'Olio'},{name:'Aglio'},{name:'Origano'}], tipology:'Piazza Classica'},
  {name:'La Marinara mille latti', price:9.50, priceSmall:8.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Stracciatella'},{name:'Olio'},{name:'Aglio'},{name:'Origano'}], tipology:'Piazza Classica'},
  {name:'La Margherita', price:9.50, priceSmall:8.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Basilico'},{name:'(Parmigiano 24 mesi)'}], tipology:'Piazza Classica'},
  {name:'La Prosciutto', price:10.50, priceSmall:9.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Prosciutto cotto o crudo'},{name:'Mozz. fior di latte d\'ageola '}], tipology:'Piazza Classica'},
  {name:'La Prosciutto Golosa', price:11.50, priceSmall:10.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Prosciutto cotto o crudo'},{name:'Mozz. fior di latte d\'ageola '},{name:'Provola'}], tipology:'Piazza Classica'},
  {name:'La Primavera', price:10.50, priceSmall:9.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Zucchine'},{name:'Mozz. fior di latte d\'ageola '}], tipology:'Piazza Classica'},
  {name:'La Primavera Golosa', price:10.50, priceSmall:9.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Zucchine'},{name:'Provola'},{name:'Mozz. fior di latte d\'ageola '}], tipology:'Piazza Classica'},
  {name:'La Margherita Mille Latti', price:10.50, priceSmall:9.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Stracciatella'},{name:'Basilico'}], tipology:'Piazza Classica'},
  {name:'La Mille Latti al Prosciutto', price:11.50, priceSmall:10.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Prosciutto cotto o crudo'},{name:'Stracciatella'}], tipology:'Piazza Classica'},
  {name:'La Mille Latti di Primavera', price:11.50, priceSmall:10.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Zucchine'},{name:'Stracciatella'}], tipology:'Piazza Classica'},
  {name:'Il Tango imperiale', price:12.00, priceSmall:11.00, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Zucchine'},{name:'Prosciutto cotto o crudo'},{name:'Stracciatella'}], tipology:'Piazza Classica'},
  {name:'La Portafoglio', price:7.50, priceSmall:6.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Origano'}], tipology:'Piazza Portafoglio'},
  {name:'La Portafoglio mille latti', price:8.50, priceSmall:7.50, ingredients:[{name:'Pomodoro San Marzano'},{name:'Mozz. fior di latte d\'ageola '},{name:'Stracciatella sul cornicione'},{name:'Origano'}], tipology:'Piazza Portafoglio'},
  {name:'Prosciutto Semplice', price:5.50, priceSmall:4.50, ingredients:[{name:'Prosciutto cotto o crudo'}, {name:'Spezie'}], tipology:'Panino'},
  {name:'Prosciutto', price:6.00, priceSmall:5.00, ingredients:[{name:'Prosciutto cotto o crudo'}, {name:'Insalata'}, {name:'Pomodoro'}], tipology:'Panino'},
  {name:'Prosciutto Goloso', price:6.50, priceSmall:5.50, ingredients:[{name:'Prosciutto cotto o crudo'}, {name:'(Mozz. fior di latte d\'ageola, Stracciatella, Provola) '}], tipology:'Panino'},
  {name:'Panino di Primavera', price:6.50, priceSmall:5.50, ingredients:[{name:'Zucchine'}, {name:'(Mozz. fior di latte d\'ageola, Stracciatella, Provola) '}, {name:'Salsa della Casa'}], tipology:'Panino'},
  {name:'Panino dell\'Impero ', price:7.50, priceSmall:6.50, ingredients:[{name:'Zucchine'}, {name:'Prosciutto cotto o crudo'},{name:'(Mozz. fior di latte d\'ageola, Stracciatella, Provola) '}, {name:'Salsa Imperiale della Casa'}], tipology:'Panino'},
  */
