import { NavbarIten } from "../types/types";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaUserCircle,FaHeart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiUser3Fill ,RiShoppingCartFill} from "react-icons/ri";

export const NavbarItensMain: NavbarIten[] = [
    { name: 'Nosotros', to: '/about', Icon: FaUserCircle },
    { name: 'Contactanos', to: '/skills', Icon: MdLanguage },
    { name: 'Preguntas Frecuentes', to: '/projects', Icon: AiFillPlayCircle },
];
export const NavbarItensIcons: NavbarIten[] = [
    { name: 'Nosotros', to: '/about', Icon: FaHeart },
    { name: 'Contactanos', to: '/skills', Icon: RiShoppingCartFill },
    { name: 'usuario', to: '/auth/login', Icon: RiUser3Fill },
];
export const MainNav: NavbarIten[] = [
    { name: 'Ofertas especiales', to: '/about', Icon: FaHeart },
    { name: 'Nuevos Productos', to: '/about', Icon: FaHeart },
    { name: 'Tienda', to: '/store', Icon: RiUser3Fill },
    { name: 'Categorias', to: '/skills', Icon: RiShoppingCartFill },
];