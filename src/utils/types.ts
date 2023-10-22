import { StaticImageData } from "next/image";
export type Product={
    id:number;
    name:string;
    price:number;
    tagline:string;
    catagory:string;
    image:string|StaticImageData;
};