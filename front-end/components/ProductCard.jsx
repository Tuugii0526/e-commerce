"use client"
import Image from "next/image"
import { sixtyFour } from "@/app/fonts/fonts"
export const ProductCard=({product})=>{
    const cartProducts=JSON.parse(localStorage.getItem('cartProducts')) || []
    const onClick=()=>{
        cartProducts.push(product)
        localStorage.setItem('cartProducts',JSON.stringify(cartProducts))
    }
    return <div className="flex flex-col gap-2">
        <Image src={`${product.image_url}`} alt={product.name}  width={100} height={70} className="h-auto w-auto"/>
        <div className="flex justify-around items-center">
        <p className={`${sixtyFour.className} antialiased` }>{product.name}</p>
        <button className="btn" onClick={onClick}>Add to cart</button>
        </div>
    </div>
}