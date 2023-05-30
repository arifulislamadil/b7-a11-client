import React, { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";

const AddToys = () => {
  const {user}=useContext(AuthContext)
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [toyName, setToyName] = useState("");
  const [sellerEmail, setSellerEmail] = useState(user?.email);
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  const newToy = {pictureUrl,name,sellerName,sellerEmail,subCategory,price,rating,quantity,description,toyName};

  // add a toy to the database
  fetch("http://localhost:5000/addToy",{
  method: "POST",
  headers: {
  'content-type': 'application/json'
  },
  body: JSON.stringify(newToy)
})
.then(res=>res.json())
.then(data => console.log(data))


    // Reset the form fields
    setPictureUrl("");
    setName("");
    setSellerName("");
    // setSellerEmail("");
    setSubCategory("");
    setPrice("");
    setRating("");
    setQuantity("");
    setDescription("");
  };
  return (
    <div className="card flex-shrink-0 w-5/6 md:w-1/2 mx-auto border my-10">
      <div className="card-body">
        <h1 className="text-center text-4xl font-serif font-semibold text-orange-600">Add a toy</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                value={pictureUrl}
                placeholder="Image url"
                onChange={(event) => setPictureUrl(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={name}
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name:</span>
              </label>
              <input
                type="text"
                value={sellerName}
                placeholder="seller name"
                className="input input-bordered"
                onChange={(event) => setSellerName(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name:</span>
              </label>
              <input
                type="text"
                value={toyName}
                placeholder="seller name"
                className="input input-bordered"
                onChange={(event) => setToyName(event.target.value)}
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
                value = {sellerEmail}
                onChange={(event) => setSellerEmail(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={subCategory}
                placeholder="sub-category"
                onChange={(event) => setSubCategory(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={price}
                placeholder="price"
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-Rating:</span>
              </label>

              <input
                type="number"
                className="input input-bordered"
                value={rating}
                placeholder="sub-Rating"
                onChange={(event) => setRating(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity:</span>
              </label>

              <input
                type="number"
                value={quantity}
                className="input input-bordered"
                placeholder="Available Quantity"
                onChange={(event) => setQuantity(event.target.value)}
              />
            </div>
            
          </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Detail Description:</span>
              </label>

              <textarea
              placeholder="type your detail description"
                value={description}
                rows="5" cols="33"
                className="input input-bordered pt-2 pb-5"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          <div className="text-center mt-5">
            <button type="submit" className="bg-orange-600 btn px-10">
              Add 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
