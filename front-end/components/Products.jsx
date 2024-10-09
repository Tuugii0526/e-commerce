import { ProductCard } from "./ProductCard"
import "dotenv/config"
export const Products= async()=>{
 const res= await fetch(`${process.env.BACKEND_URL}/products`)
 const products= await res.json()
 return (
    <div className="w-full h-fit grid-cols-3 ">
        {
            products.map(pro=><ProductCard key={pro.id} product={pro}/>)
        }
    </div>
 )
}