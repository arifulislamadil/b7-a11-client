import React, { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = ({ toy,toys,setToys }) => {
  const {
    _id,
    name,
    pictureUrl,
    toyName,
    sellerName,
    subCategory,
    quantity,
    price,
  } = toy;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        fetch(`https://funedutoys.vercel.app/addToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter(ty=> ty._id!==_id)
              setToys(remaining)
            }
          });
      }
    });
  };

  return (
    <tbody className="">
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <th>
              <label>
                <button onClick={() => handleDelete(_id)} className="">
                  <FaRegTrashAlt />
                </button>
              </label>
            </th>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
            </div>
          </div>
        </td>
        <td>{sellerName}</td>
        <td>{subCategory}</td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/updateToy/${_id}`}>
            <button className="btn bg-orange-600 mt-3">Update</button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToy;
