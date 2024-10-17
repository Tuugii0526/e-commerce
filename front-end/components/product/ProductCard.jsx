"use client"
import { roboto_mono } from "@/app/fonts/fonts";
export const ProductCard=({product})=>{
    return <div className=" flex flex-col gap-2 max-h-[200px]">
        <div className="h-3/4 w-full ring-1 ring-gray-300 rounded-sm bg-slate-100">
        <img src={product.image_url} alt={product.name} className="h-full w-full "/>
        </div>
        <div className="flex p-4 gap-5 items-center">
        <p className={`${roboto_mono.className} antialiased` }>{product.name}</p>
        <button className="btn" >Add to cart</button>
        </div>
    </div>
}