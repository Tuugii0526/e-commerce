"use client"
import { roboto_mono } from "@/app/fonts/fonts";
export const ProductCard=({product})=>{
    const cartProducts=JSON.parse(localStorage.getItem('cartProducts')) || {};
      const   onClick=()=>{
        cartProducts[product?.id]=(cartProducts[product?.id]||0)+1
            localStorage.setItem('cartProducts',JSON.stringify(cartProducts))
        }
    return <div className="flex flex-col gap-2">
        <img src={product.image_url} alt={product.name} className="h-full w-full "/>
        <div className="flex justify-around items-center">
        <p className={`${roboto_mono.className} antialiased` }>{product.name}</p>
        <button className="btn" onClick={onClick}>Add to cart</button>
        </div>
    </div>
}