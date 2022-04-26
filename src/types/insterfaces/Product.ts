
export interface ProductState {
    products: Product[] | null
    product: Product | null
    previous: string | null
    next: string | null
    count: string | null
    characteristic: Characteristic[] | null
    images: Image[] | null
    related: Product[] | null
    colors: Product[] | null
}


export interface Product {
    id: number
    title: string
    price: number
    compare_price: number
    quantity: number
    slug: string
    photo: string
}

export interface Image {
    id: number,
    photo: string
}
export interface Characteristic {
    title: string
}