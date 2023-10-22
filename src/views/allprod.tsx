import allprod from "../../public/allprod.png"
import Image from "next/image"
import Link from "next/link"
const Allprod = () => {
    return (
        <div className="grid grid-cols-2 py-[4rem] w-full">
            <div className="col-span-1 relative">
                <h1 className="mt-32 font-bold font-sens text-8xl text-gray-100 w-1/2">Defferent from other</h1>
                <div className="grid grid-cols-2 gap-20 absolute bottom-10 left-0">
                    <div className="col-span-1 space-y-24 pr-20">
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">
                                Using Good Quality Materials
                            </h2>
                            <p className="texl-md">
                                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">
                                Using Good Quality Materials
                            </h2>
                            <p className="texl-md">
                                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-24 pr-20">
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">
                                Using Good Quality Materials
                            </h2>
                            <p className="texl-md">
                                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold">
                                Using Good Quality Materials
                            </h2>
                            <p className="texl-md">
                                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <h1 className="text-5xl font-bold text-black mx-auto w-4/5">Unique and Authentic Vintage Designer Jewellery</h1>
                <div className="flex justify-evenly pt-10">
                    {/* <div> */}
                        <Image src={allprod} alt="Banner Image" className="w-[300px] h-[350px]" />
                        <div className="w-fit m-auto px-10 space-y-7">
                            <p>
                                This piece is ethically crafted in our small family-owned workshop in Peru with
                                unmatched attention to detail and care. The Natural color is the actual natural
                                color of the fiber, undyed and 100% traceable.
                            </p>
                            <Link href={"/products"}><div className="py-2 px-20 rounded-[10px] bg-gray-700 text-white font-bold text-sm w-fit">All Products</div></Link>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
export default Allprod