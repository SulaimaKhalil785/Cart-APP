"use client";
import React ,{useEffect,useState} from "react";
import Link from "next/link";
import Card from "@/components/card";
export default function Home() {
   const [products, setProducts] = useState([]);
  useEffect(() => {
    // Perform side effects here
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data
        console.log(data);
        setProducts(data.products || []);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
      <h1>Cart App</h1></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
           <Link key={product.id} href={`/product/${product.id}`}>
            <div>
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.thumbnail}
              />
            </div>
          </Link>
        ))}
</div>
    </div>
  );
}
