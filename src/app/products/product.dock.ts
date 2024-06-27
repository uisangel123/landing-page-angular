export const productsList: Product[]= [

  {id: 1,name:'Oppo reno 7',price: 1800000,description:'ram 8 128gb'},
  {id: 2,name:'Samsung a 55',price: 1500000,description:'ram 6 128gb'},
  {id: 3,name:'redmi note 8',price: 100000,description:'ram 12 128gb'},
  {id: 4,name:'xiaomi note 9',price: 1200000,description:'ram 8 1024gb'},
  {id: 5,name:'redmi note 8',price: 1300000},
  {id: 6,name:'redmi note 13',price: 1500000,description:'ram 12 256gb'},
]


export interface Product {
   id: number | string;
   name: string;
   price:number;
   description?:string;
}
