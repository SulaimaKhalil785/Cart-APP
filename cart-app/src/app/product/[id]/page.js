import React from 'react'

 const getProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  };
const Product = async({params}) => {
  const product =await getProduct(params.id);
  return (
    <div className="font-sans p-8">
      <div className="border-2 text-center max-w-md mx-auto">
        <img src={product.thumbnail} alt={product.title} className="w-full h-auto" />
        <h2 className="text-xl font-bold">Product Title: {product.title}</h2>
        <p className="text-lg">Price: ${product.price}</p>
      </div>
    </div>
  )
}

export default Product