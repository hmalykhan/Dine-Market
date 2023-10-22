import Image from "next/image"
import prod1 from "../../public/prod1.png"
import prod2 from "../../public/prod2.png"
import prod3 from "../../public/prod3.png"
import Productlist from "./Productlist"
const ProductsSection=()=>{
    return(
        <div className="flex flex-col gap-3 justify-center items-center my-[4rem]">
            <span className="text-blue-600 font-bold text-md font-mono ">Products</span>
            <h2 className="text-black font-bold text-3xl">Check what we have</h2>
            <div className="grid grid-cols-3 place-content-between w-full">
                    <Productlist/>
            </div>
        </div>
    )
    }
export default ProductsSection