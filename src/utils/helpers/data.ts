import { NavbarIten } from "../types/interface";

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
    { name: 'Inicio', to: '/'  },
    { name: 'Tienda', to: '/store'  },

    { name: 'Ofertas especiales', to: '/about'},
    { name: 'Nuevos Productos', to: '/about' },
    { name: 'Categorias', to: '/skills' },
];