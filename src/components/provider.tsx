"use client";
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { store } from "@/store/store";
const Providers=({children}:{children:React.ReactNode})=>{
return<Provider store={store}>{children}<Toaster   position="top-right" reverseOrder={false}></Toaster></Provider>
};
export default Providers