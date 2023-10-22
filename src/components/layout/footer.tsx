import Image from "next/image"
import logo from "../../../public/Logo.webp"
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import {FaYoutubeSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="flex justify-between items-start px-[8rem] py-[4rem]">
                <div className="space-y-7 w-1/3">
                    <Image src={logo} alt="logo" className="w-[180px] h-[30px]" />
                    <p className="text-gray-700">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className="flex gap-4 w-fit items-center text-black text-4xl">
                        <AiFillLinkedin />
                        <FaYoutubeSquare/>
                        <FaFacebookSquare />
                    </div>
                </div>
                <div>
                    <ul className="space-y-3 text-gray-500">
                        <li className="text-gray-600 font-bold">Company</li>
                        <li className="cursor-pointer">About us</li>
                        <li className="cursor-pointer">Terms of use</li>
                        <li className="cursor-pointer">Privacy Policy</li>
                        <li className="cursor-pointer">How it works</li>
                        <li className="cursor-pointer">Contact us</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-3 text-gray-500">
                        <li className="text-gray-600 font-bold">Support</li>
                        <li className="cursor-pointer">Support Career</li>
                        <li className="cursor-pointer">24h Service</li>
                        <li className="cursor-pointer">Quick Chat</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-3 text-gray-500">
                        <li className="text-gray-600 font-bold">Contact</li>
                        <li className="cursor pointer">Watsapp</li>
                        <li className="cursor pointer">24h Service</li>
                    </ul>
                </div>
            </div>
            <div className="border-t-[1px] border-gray-700 mt-[4rem] py-3 px-[8rem] flex justify-between text-gray-500">
                <span>Copyright © 2022 Dine Market</span>
                <span>Design by.<span className="font-bold text-gray-600">10101010</span> </span>
                <span>Code by.<span className="font-bold text-gray-600">hmalykhan@github</span></span>
            </div>
        </>
    )
}
export default Footer