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
    { name: 'Catálogo', to: '/store'  },
];