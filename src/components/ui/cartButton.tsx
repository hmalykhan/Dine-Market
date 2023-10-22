"use client";
import {Button} from "./button";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from 'react-hot-toast';
const CartButton=()=>{
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(cartActions.AddtoCart({quantity:1}));
        toast.success("product has been added successfully.")
    };
    const removeFromCart=()=>{
        dispatch(cartActions.RemoveFromCart({}));
    };
    const clearCart=()=>{
        dispatch(cartActions.ClearCart());
    };
    return (
        <div>
            <Button className="font-semibold bg-gray-900 px-7 text-white hover:bg-gray-900" onClick={addToCart}><ShoppingCart className="mr-2 h-4 w-4" />Add to Cart</Button>
        </div>
    )
}
export default CartButton;