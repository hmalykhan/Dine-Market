import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button" 
import {ShoppingCart} from "lucide-react"
import Image from "next/image"
import heroimage from "public/heroimage.webp"
import bazaar from "../../public/bazaar.png"
import versace from "../../public/vercase.png"
import bustle from "../../public/bustle.png"
import instyle from "../../public/instyle.png"
const Hero = () =>{
return (
    <section className="items-center py-[2rem] grid grid-cols-2">
        {/* left div */}
        <div>
            <Badge className="py-2 px-6 rounded-xl bg-blue-200 text-blue-700 text-lg">Sale 70%</Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-8">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
    <Button className="bg-black text-white h-12 px-8 mt-8 hover:bg-black">
      <ShoppingCart className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    <div className="flex items-center justify-between w-full pt-20 pr-10">
        <Image className="w-[100px] h-[35px]" src={bazaar} alt="bazaar"/>
        <Image className="w-[100px] h-[35px]" src={versace} alt="versace"/>
        <Image className="w-[100px] h-[35px]" src={bustle} alt="bustle"/>
        <Image className="w-[100px] h-[35px]" src={instyle} alt="instyle"/>
    </div>
        </div>
        {/* right div */}
        <div className="flex justify-center items-start relative bg-[#ffeee6] w-[77%] h-[90%] rounded-full ">
        <Image src={heroimage} alt="hero image" className="absoulute w-[650px] h-[650px] top-0" />
        </div>
    </section>
)
}
export default Hero 