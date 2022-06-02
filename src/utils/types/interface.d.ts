export interface NavbarIten {
    name: string
    to: string
}
import { Product } from "./insterfaces/Product";

export interface IFormLogin {
    email: string
    password: string
}
export interface IFormSignUp {
    first_name: string
    last_name: string
    email: string
    password: string
    re_password: string
}
export interface IFormResetPass {
    email: string
}
export interface IFormResetPassConfirm {
    password: string
    re_password: string
}

export interface CartState {
    items: itemCart[] | null
    amount: number | null
    total_items: number | null
    sidebar: boolean
}
export interface ShippingState {
    shipping_options: shipping_option[] | null
}

export interface shipping_option {
    id: number
    name: number
    time_to_delivery: string
    price: string
    photo: string
}
export interface itemCart {
    product: Product
    count: number
}


export interface AlertState {
    msg: (string | null)
    type: (string | null)

}

export interface AuthState {
    access: (string | null)
    refresh: (string | null)
    isAuthenticated: boolean
    user: (User | null)
    loading: boolean

}

export interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    get_full_name: string
    get_short_name: string
}


export interface ProductState {
    home: HomeProducts | null
    products: Product[] | null
    product: Product | null
    categories: Category[] | null
    brands: Brand[] | null
    previous: string | null
    next: string | null
    count: string | null
    characteristic: Characteristic[] | null
    images: Image[] | null
    related: Product[] | null
    products_views: Product[] | null
    colors: Product[] | null
    subcategory: Category | null
}
export interface HomeProducts {
    products_featured: Product[] | null
    products_news: Product[] | null
    products_views: Product[] | null
    products_sold: Product[] | null
}
export interface resultProducts {
    count: string,
    next: string,
    previous: string,
    results: Product[]
}
export interface Category {
    id: number
    title: string
    photo: string
    slug: string
    description: string
    total: number
    sub_categories: Category[] | null
    get_parent: string | null
    get_parent_slug: string | null
}
export interface Brand {
    id: number
    title: string
    is_featured: string
    photo: string
    total: number

}
export interface Product {
    id: number
    title: string
    price: number
    compare_price: number
    quantity: number
    slug: string
    photo: string
    get_category: string
    get_brand: string
}

export interface Image {
    id: number
    photo: string
}
export interface Characteristic {
    title: string
    description: string
}

export interface OrderState {
    original_price: number
    total_after_coupon: number
    total_amount: number
    estimated_tax: number
    shipping_cost: number
    coupon: Coupon | null
}

export interface Coupon {
    code: string,
    value: string,
    can_use: boolean
}

export interface IFormCheckout {
    full_name: string,
    address: string;
    city: string;
    district: string;
    zipcode: string;
    phone: string;
    coupon_code: string,
    shipping_id: number,
}


export interface FormFilter {
    brandsform: number[];
    categoriesform: number[];
    order: string;
    sort_by: string;
    price_range: string;
}