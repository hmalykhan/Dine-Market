// import p1 from "public/p1.png"
import Image from "next/image"
import Link from "next/link"
import prod1 from "../../public/prod1.png"
import prod2 from "../../public/prod2.png"
import prod3 from "../../public/prod3.png"
import {Products} from "@/utils/mocks"
import {client} from '../../sanity/lib/client'
import CartButton from "@/components/ui/cartButton"
const list=async()=>{
    const data=await client.fetch(`*[_type=='product']{"url":image.asset->url,id,name,title,category,price}`)
    return data
}
const Productlist = async() =>{
    const data=await list()
    const ProductsChunks=data.slice(0,3);
    // console.log(ProductsChunks);
    return(
        <>
            {
                ProductsChunks.map((product:any,id:number)=>(
                    // <ProductCard key={product.id} title={product.name} catagory={product.catagory} tagline={product.tagline} price={product.price} img={p1}  id={product.id}/>
                    <div className="grid col-span-1 mt-20 place-content-center">
                    {/* <Image width={600} height={600} src={`/../public/prod${id+1}.png`} alt="product 1" className="w-[400px] mb-[20px] hover:w-[420px] hover:mb-0 duration-300"/>
                    <h3 className="pt-3 font-semibold">this is the category.</h3>
                    <h3 className="font-bold text-lg">$price</h3> */}
                    <div className="space-y-5 scale-90 hover:scale-100 duration-500">
        <Link href={`/products/${product.id}`}>
          <div >
          <Image width={380} height={400} src={product.url} alt="product 1" className="mb-[20px] "/>
            <h3 className="text-lg font-sens font-semibold mt-3">
              {product.title}
            </h3>
            <h3 className="text-md font-sens font-semibold mb-2 text-gray-500">
              {product.category}
            </h3>
            <p className="text-xl font-bold">$ {product.price}</p>
          </div>
        </Link>
        <div className="w-fit px-0">
          <CartButton/>
        </div>
      </div>
                </div>
                ))
            }
        </>
    )
}
export default Productlist