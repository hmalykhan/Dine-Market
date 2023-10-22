"use client";
import {useSelector,useDispatch} from "react-redux" 
import { cartActions } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";
import React,{useState} from "react"
const Quantity = () =>{
    const [num,setNum] =useState(1);
    //     const counterValue = useSelector(
    //         (state:RootState)=>(state.counterSlice.value)
    //         )
    //         const dispatch=useDispatch();

    // const increament =() =>{
    //     dispatch(counterActions.increment());
    // }
    // const decreament =() =>{
    //     dispatch(counterActions.decrement());
    // }
    // const IncreamentByAmount =(num:number) =>{
    //     dispatch(counterActions.incrementByAmount(num));
    // }
    // const num=0;
    return( 
        <div className="gap-x-8 center">
        <button className="border w-10 h-10 rounded-full center" onClick={()=>{num<=1?1:setNum(num-1)} }>-</button>
        {/* <button className="border w-10 h-10 rounded-full center" onClick={decreament}>-</button> */}
        {/* <span className="text-lg font-semibold text-black">{counterValue}</span> */}
        <span className="text-lg font-semibold text-black">{num}</span>
        <button className="border w-10 h-10 rounded-full center" onClick={()=>{setNum(num+1)}}>+</button>
        {/* <button className="border w-10 h-10 rounded-full center" onClick={increament}>+</button> */}
        </div>
    )
}
export default Quantity