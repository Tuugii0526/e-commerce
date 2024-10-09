import Image from "next/image"

export const ProductCard=({product})=>{
    return <div className="flex flex-col">
        <Image src={`${product.image_url}`} width={100} height={70}/>
        <p>{product.name}</p>
    </div>
}