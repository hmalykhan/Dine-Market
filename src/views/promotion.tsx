import pro1 from "../../public/pro1.png"
import pro2 from "../../public/pro2.png"
import pro3 from "../../public/pro3.png"
import Image from "next/image"
const Promotion = () => {
    return (
        <div className="flex flex-col justify-center items-center py-[4rem] gap-5">
            <span className="text-blue-600 font-bold text-md font-mono ">Promotion</span>
            <h2 className="text-black font-bold text-3xl">Our Promotion Events</h2>
            <div className="grid grid-cols-5 gap-7 w-full my-5">
                <div className="col-span-3 w-full">
                    <div className=" w-full flex justify-between bg-gray-300 mb-5 relative">
                        <div className=" pl-10 py-14 text-2xl">
                            <h2 className="font-bold">GET UPTO 60% OFF.</h2>
                            <h2 className="font-light">For the summer season.</h2>
                        </div>
                        <Image src={pro1} alt="promorion 1 image" className=" top-0 right-0 h-[200px] w-[260px]"/>
                    </div>
                    <div className=" w-full h-48 bg-slate-900 text-white text-center flex flex-col items-center justify-center">
                            <h2 className="font-bold mb-4 text-2xl">GET UPTO 60% OFF.</h2>
                            <h2 className="font-light">For the summer season.</h2>
                            <div className="mt-5 bg-slate-700 px-20 py-2 rounded-xl"><span className="text-md font-semibold">DINEWEEKENDSALE</span></div>
                    </div>
                </div>
                <div className=" flex items-start justify-start col-spam-1 h-full bg-[#ffeee6] relative">
                    <div className="m-6">
                        <h3 className="text-black">
                            Felx Sweatshirt
                        </h3>
                        <span className="text-black">100$</span>
                        <span className="mx-3 text-black font-bold">75$</span>
                    </div>
                    <div className="absolute bottom-0 right-0"><Image src={pro2} alt="promotion-image-2" width={270}/></div>
                </div>
                <div className="col-spam-1 h-full bg-gray-300 relative">
                    <div className="m-6">
                        <h3 className="text-black">
                            Push Button Bomber.
                        </h3>
                        <span className="text-black">190$</span>
                        <span className="mx-3 text-black font-bold">110$</span>
                    </div>
                    <div className="absolute bottom-0 right-0"><Image src={pro3} alt="promotion-image-2" width={270}/></div>
                </div>
            </div>
        </div>
    )
}
export default Promotion