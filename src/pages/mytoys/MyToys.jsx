import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {
  const { user ,loading} = useContext(AuthContext);

  if(loading){
    <progress className="progress w-56"></progress>
  }
  const [toys, setToys] = useState([]);
  

  const url = `http://localhost:5000/addToy?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>  setToys(data));
  }, []);

  return (
    <div className="overflow-x-auto w-full mt-5 mb-20">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Toy Info</th>
            <th>Seller Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th className="">Action</th>
          </tr>
        </thead>
        {toys.map((toy) => (
          <MyToy toy={toy}></MyToy>
        ))}
      </table>
    </div>
  );
};

export default MyToys;
