import { format } from "date-fns";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcDeleteDatabase } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";

const ManageTable = ({post}) => {
  return (
      <tr key={post._id}>
        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
          {post.title}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
          {post.organizerEmail}
        </td>

        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {format(new Date(post.deadline), "P")}
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-2">
            <p>{post.number}</p>
          </div>
        </td>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500`}
          >
            <span className={``}>{post.category}</span>
            <h2 className="text-sm font-normal ">{}</h2>
          </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            title="Mark Complete"
            className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
          >
        <FcDeleteDatabase size={30} />
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            title="Mark Complete"
            className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
          >
        <FiEdit className="text-cyan-400"  size={25}/>
          </button>
        </td>
      </tr>
  );
};

export default ManageTable;
