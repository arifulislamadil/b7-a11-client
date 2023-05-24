import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id,picture, title, price, discount } = product;
  return (
    <div>
      <div className="card border-solid border-2 border-orange-500">
        <div className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl w-full" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title.slice(0, 20)}</h2>
          <p className="text-md">Price: $ {price}</p>
          <div className="card-actions">
            <Link to={`/product/${_id}`}>
              <button className="btn bg-orange-600">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
