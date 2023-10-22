import {Products} from "@/utils/mocks"
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image"
import Image from "next/image"
import p1 from "public/p1.png"
import Quantity from "@/components/ui/quantity"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useDispatch } from "react-redux"
import {client} from "../../../../sanity/lib/client"
import CartButton from "@/components/ui/cartButton"
const size=["XS","SM","MD","LG","Xl"]
const sign=["+","-"]
// export default function Page({params}:{params:{id:string}}) {
//     const getProductDetails=(id:number|string)=>{
//       return Products.filter((product)=>product.id==id)
//     };
//     const result=getProductDetails(params.id)
    export default async function Page({params}:{params:{id:string}}) {
      // console.log(params.id)
      const list=async()=>{
        const data=await client.fetch(`*[_type=='product'&& id=='${params.id}']{"url":image.asset->url,id,name,title,category,price}`)
        return data
    }
    const data=await list()
    console.log(data)
    return <div className="flex mt-16 py-10 flex-wrap">
    {data.map((product:any)=>(<div key={product.id} className="flex gap-6 w-full justify-center items-start">
      <div className="w-fit flex flex-col items-center justify-center gap-7">
      <Image src={product.url} alt="product image" width={100} height={100} className="cursor-pointer"></Image>
      <Image src={product.url} alt="product image" width={100} height={100} className="cursor-pointer"></Image>
      <Image src={product.url} alt="product image" width={100} height={100} className="cursor-pointer"></Image>
      <Image src={product.url} alt="product image" width={100} height={100} className="cursor-pointer"></Image>
      </div>
    <div className="w-2/3 pl-10">
      <Image src={product.url} alt="product image" width={879} height={944}></Image>
      </div>
      <div className="w-1/3 pt-20">
        <h1 className="text-4xl font-snas">{product.name}</h1>
        <h2 className="text-gray-400 font-semibold text-xl mb-10">{product.title}</h2>
        <div>
          <h3 className="text-base font-semibold my-2">Select Size</h3>
        </div>
       <div className="flex gap-x-5">
       {size.map((item)=>{
          return(
            <div className="h-10 w-10 rounded-full border duration-500  bg-white flex justify-center items-center hover:shadow-2xl mt-2"><span className="text-[10]  text-gray-500 font-semibold">{item}</span></div>
          )
        })}
       </div>
       <div className="flex gap-x-5 items-center mt-7">
      <div className="my-10"><h3 className="text-lg font-bold text-black">Quantity: </h3></div>
      <Quantity></Quantity>
       </div>
       <div className="mt-8 flex gap-x-5 items-center">
      <CartButton/>
<h2 className="text-3xl font-bold">${product.price}</h2>
       </div>
        </div>
    </div>))}</div>}