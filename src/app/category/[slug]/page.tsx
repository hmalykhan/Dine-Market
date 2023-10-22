import {Products} from "@/utils/mocks"
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image"
import {client} from "../../../../sanity/lib/client"
const getProductsByCategory=(Category:string)=>{
return Products.filter((product)=>product.catagory===Category)
};
export default async function Page({params}:{params:{slug:string}}) {
  const list=async()=>{
    const data=await client.fetch(`*[_type=='product'&& category=='${params.slug}']{"url":image.asset->url,id,name,title,category,price}`)
    return data
}
const data=await list()
  // console.log(params);
  const result=getProductsByCategory(params.slug)

    return <div className="flex justify-evenly gap-y-10 mt-16 py-10 flex-wrap">
      {
        result.length>0?data.map((product:any)=>(
          // <ProductCard key={product.id} title={product.name} price={product.price} tagline={product.tagline} catagory={product.catagory} img={product.image as StaticImageData} id={product.id}/>
          <ProductCard key={product.id} id={product.id} name={product.name} title={product.title} category={product.category} url={product.url}  price={product.price}/>
      )):<p>No product found</p>
      }
</div>
  }

  
  


  