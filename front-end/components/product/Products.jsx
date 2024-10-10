import { ProductsSub } from "./ProductsSub";

export const Products = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
    const products = await res.json();
  return (
    <ProductsSub products={products}/>
  );
};
