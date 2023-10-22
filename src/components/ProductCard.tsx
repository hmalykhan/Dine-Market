import Image, { StaticImageData } from "next/image"
import { FC } from "react"
import next from "next/types"
import Link from 'next/link'
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import CartButton from "./ui/cartButton"
// const ProductCard = (props:{title:string,price:number,catagory:string, tagline:string ,img:StaticImageData,id:number}) =>{
const ProductCard = (props: { id: string, name: string, title: string, category: string, price: number, url: string }) => {
  return (
    <div className="w-1/4 flex flex-col justify-center items-center mt-20">
      <div className="space-y-5">
        <Link href={`/products/${props.id}`}>
          <div >
            <Image src={props.url} alt="product 1" width={250} height={270} />
            <h3 className="text-lg font-sens font-semibold mt-3">
              {props.title}
            </h3>
            <h3 className="text-md font-sens font-semibold mb-2 text-gray-500">
              {props.category}
            </h3>
            <p className="text-xl font-bold">$ {props.price}</p>
          </div>
        </Link>
        <div className="w-fit px-0">
          <CartButton/>
        </div>
      </div>
    </div>
  )
}
export default ProductCard