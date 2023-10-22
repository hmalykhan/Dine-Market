const SearchSec=()=>{
    return(
        <div className="py-[8rem] relative flex justify-center items-center">
            <h1 className="text-9xl text-gray-100 font-extrabold">NewsLetter</h1>
        <div className="absolute py-[4rem] flex flex-col justify-center items-center gap-6">
            <h2 className="text-4xl font-bold">Subscribe Our Newsletter</h2>
            <p>Get the latest information and promo offers directly</p>
            <div className="flex gap-3 items-center justify-center">
            <input placeholder={"Enter the email address."} className=" pr-24 text-sm p-2 border-black border hover:border-spacing-1"></input>
            <div className="text-white text-bold bg-gray-600 rounded-lg py-2 px-5">Get Started</div>
            </div>
        </div>
        </div>
    )
}
export default SearchSec