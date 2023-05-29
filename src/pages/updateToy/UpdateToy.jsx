import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    pictureUrl,
    toyName,
    sellerName,
    subCategory,
    quantity,
    price,
    sellerEmail,
    rating,
    description
  } = toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const pictureUrl = form.pictureUrl.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const sellerEmail = form.sellerEmail.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const newToy = {pictureUrl,name,sellerName,sellerEmail,subCategory,price,rating,quantity,description,toyName};
    console.log(newToy.name);
  // add a toy to the database
  fetch(`http://localhost:5000/addToy/${_id}`,{
  method: "PUT",
  headers: {
  'content-type': 'application/json'
  },
  body: JSON.stringify(newToy)
})
.then(res=>res.json())
.then(data => {console.log(data);
    if(data.modifiedCount>0){
        Swal.fire({
            title:"Success!",
            text:"Coffee Updated Successfully",
            icon:"success",
            confirmButtonText:"cool"
        })
    }
})
  };







  return (
    <div className="card flex-shrink-0 w-5/6 md:w-1/2 mx-auto border my-10">
      <div className="card-body">
        <h1 className="text-center text-4xl font-serif font-semibold">
          Update toy
        </h1>
        <form onSubmit={handleUpdateToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                defaultValue={pictureUrl}
                placeholder="Image url"
                name="pictureUrl"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={name}
                placeholder="name"
               name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name:</span>
              </label>
              <input
                type="text"
                defaultValue={sellerName}
                placeholder="seller name"
                className="input input-bordered"
               name="sellerName"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name:</span>
              </label>
              <input
                type="text"
                defaultValue={toyName}
                placeholder="seller name"
                className="input input-bordered"
                name="toyName"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email:</span>
              </label>

              <input
                type="email"
                className="input input-bordered"
                placeholder="seller email"
                defaultValue={sellerEmail}
              name="sellerEmail"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={subCategory}
                placeholder="sub-category"
              name="subCategory"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                defaultValue={price}
                placeholder="price"
                name="price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-Rating:</span>
              </label>

              <input
                type="number"
                className="input input-bordered"
             defaultValue={rating}
                placeholder="sub-Rating"
               name="rating"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity:</span>
              </label>

              <input
                type="number"
              defaultValue={quantity}
                className="input input-bordered"
                placeholder="Available Quantity"
             name="quantity"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail Description:</span>
            </label>

            <textarea
              placeholder="type your detail description"
             defaultValue={description}
              rows="5"
              cols="33"
              className="input input-bordered pt-2 pb-5"
             name="description"
            />
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="bg-orange-600 btn px-10">
              Update Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
