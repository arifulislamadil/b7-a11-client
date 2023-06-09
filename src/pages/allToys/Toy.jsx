import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  return (
    <tbody className="">
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
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
          <Link to={`/toyDetails/${toy._id}`}>
            <button className="btn bg-orange-600 mt-3">view more</button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default Toy;
