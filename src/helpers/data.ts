import { NavbarIten } from "../types/types";

export const NavbarItensMain: NavbarIten[] = [
    { name: 'Nosotros', to: '/about'},
    { name: 'Contactanos', to: '/skills' },
    { name: 'Preguntas Frecuentes', to: '/projects'},
];
export const NavbarItensIcons: NavbarIten[] = [
    { name: 'Nosotros', to: '/about'},
    { name: 'Contactanos', to: '/skills' },
    { name: 'usuario', to: '/auth/login'},
];
export const MainNav: NavbarIten[] = [
    { name: 'Ofertas especiales', to: '/about'},
    { name: 'Nuevos Productos', to: '/about' },
    { name: 'Tienda', to: '/store'  },
    { name: 'Categorias', to: '/skills' },
];