"use client";
import Image from "next/image"
import logo from "public/Logo.webp"
import {ShoppingCart} from "lucide-react"
import Link from "next/link"
import {useSelector,useDispatch} from "react-redux";
import { RootState } from "@/store/store";
import {AiOutlineSearch} from 'react-icons/ai'
const Header=()=>{
    const cartValue = useSelector((state:RootState)=>(state.Cart.totalQuantity));
    return(
        <div className="flex justify-between items-center px-[8rem] pt-[2rem]">
            <Image src={logo} alt="logo"/>
            <ul className="flex">
            <li className="text-lg px-4"><Link href={"/"}>Home</Link></li>
                <li className="text-md px-4"><Link href={"/category/male"}>Male</Link></li>
                <li className="text-md px-4"><Link href={"/category/female"}>Female</Link></li>
                <li className="text-md px-4"><Link href={"/category/kids"}>Kids</Link></li>
                {/* <li className="tmdt-lg px-4"><Link href={"/category/sports"}>Sports</Link></li>
                <li className="text-md px-4"><Link href={"/category/magic"}>Magic</Link></li> */}
                <li className="text-md px-4"><Link href={"/products"}>All Products</Link></li>
            </ul>
                <div className=" rounded-[5px] w-1/4 border-[1px] px-2 py-[1px]  border-gray-300 flex items-center gap-1"><AiOutlineSearch className="text-md text-gray-400"/><input placeholder="What are you looking for" className="text-gray-400 text-sm border-none focus:border-none"/></div>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
                <span className="absolute right-1 top-0 bg-red-500 rounded-full w-5 h-5 center text-white text-xs">{cartValue}</span>
                <ShoppingCart/>
            </div>
        </div>
    )
}
export default Header