import { IconType } from "react-icons";

export type Props = {
    title: string,
    content: string,
    children: (JSX.Element | null),
}
export interface NavbarIten {
    name:string;
    to:string;
    Icon: IconType;
}
