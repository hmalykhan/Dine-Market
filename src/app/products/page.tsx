import {Products} from "@/utils/mocks"
import ProductCard from "@/components/ProductCard"
import {StaticImageData} from "next/image"
import {client} from "../../../sanity/lib/client"
interface dat{
    id:"string"
    name:"string"
    title:"string"
    category:"string"
    price:number
    url:"string"
}
const list=async()=>{
    const data=await client.fetch(`*[_type=='product']{"url":image.asset->url,id,name,title,category,price}`)
    return data
}
const AllProducts = async() =>{
    const data=await list()
    // console.log(data)
    return(
        <div className="flex justify-evenly gap-y-10 mt-16 py-10 flex-wrap">
        {
            data.map((product:dat)=>(
                // <ProductCard key={product.id} title={product.name} price={product.price} catagory={product.catagory} tagline={product.title} img={product.image as StaticImageData}  id={product.id}/>
                <ProductCard key={product.id} id={product.id} name={product.name} title={product.title} category={product.category} url={product.url}  price={product.price}/>
            ))
        }
    </div>
    )
}
export default AllProducts