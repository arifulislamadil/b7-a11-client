import React from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const MyToy = ({ toy }) => {
  return (
    <tbody className="">
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <th>
              <label>
                <h3><FaBeer/></h3>
              </label>
            </th>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toy.pictureUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy.toyName}</div>
            </div>
          </div>
        </td>
        <td>{toy.sellerName}</td>
        <td>{toy.subCategory}</td>
        <td>$ {toy.price}</td>
        <td>{toy.quantity}</td>
        <th>
          <button className="btn bg-orange-600 mt-3">Update</button>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToy;
