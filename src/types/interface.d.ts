import { Product } from "./insterfaces/Product";

export interface IFormLogin {
    email: string,
    password: string;
}
export interface IFormSignUp {
    first_name:string
    last_name:string
    email:string
    password:string
    re_password:string
}
export interface IFormResetPass{
    email:string
}
export interface IFormResetPassConfirm{
    password:string
    re_password:string
}

export interface CartState {
    items: itemCart[] | null
    amount: number | null
    total_items: number | null
}
export interface ShippingState {
  shipping_options:shipping_option[]| null
}

export interface shipping_option{
    id: number
    name: number 
    time_to_delivery: string
    price: string
}
export interface itemCart {
    product: Product
    count: number
}

