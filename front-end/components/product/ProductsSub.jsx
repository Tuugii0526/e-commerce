"use client"
import { ProductCard } from "./ProductCard";
export const ProductsSub= ({products})=>{
    return <div className="w-full h-fit grid grid-cols-3  justify-items-center">
    {products.map((pro) => (
      <ProductCard key={pro.id} product={pro} />
    ))}
  </div>
}