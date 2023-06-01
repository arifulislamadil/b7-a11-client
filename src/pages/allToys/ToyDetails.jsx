import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicHeader from '../../routes/DynamicHeader';

const ToyDetails = () => {
    const toy= useLoaderData();
    const {
        pictureUrl,
        name,
        description,
        quantity,
        price,
        rating,
        sellerEmail,
        sellerName,
        subCategory,
        toyName
      } = toy;
    return (
        <div className="my-10">
           <DynamicHeader title="Details"></DynamicHeader>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="flex mx-auto w-full md:w-2/6" >
            <img src={pictureUrl} alt="Album"  />
          </figure>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{toyName}</h2>
           
            <p className="text-lg">{description}</p>
            <div className="divider">Product Details</div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <td className="font-bold">Price </td>
                    <td className="text-xl font-bold">$ {price}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Name </td>
                    <td className="text-xl font-bold">{name}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Brand </td>
                    <td>{sellerName}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Seller Email </td>
                    <td>{sellerEmail}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">category</td>
                    <td>{subCategory}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Available Quantity</td>
                    <td>{quantity}</td>
                  </tr>
                </tbody>
                
              </table>
              <div className="divider">Product Description</div>
              <p>{description}</p>

            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-orange-600">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;