import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();
  const {
    picture,
    title,
    brand,
    price,
    material,
    product_description,
    weight,
  } = details;
  return (
    <div className="my-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex mx-auto">
          <img src={picture} alt="Album" className="w-full md:w-4/6" />
        </figure>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-lg">{product_description}</p>
          <div className="divider"></div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="font-bold">Price </td>
                  <td className="text-xl font-bold">{price}</td>
                </tr>
                <tr>
                  <td className="font-bold">Brand </td>
                  <td>{brand}</td>
                </tr>
                <tr>
                  <td className="font-bold">Material </td>
                  <td>{material}</td>
                </tr>
                <tr>
                  <td className="font-bold">Weight </td>
                  <td>{weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-600">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
