import React, { useEffect, useState } from "react";
import Product from "./product/Product";

const GalleryProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center space-y-3">
        <h3 className="text-4xl font-bold">Our Products</h3>
        <p className="text-lg">Shop from our store your favorite items</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default GalleryProducts;
