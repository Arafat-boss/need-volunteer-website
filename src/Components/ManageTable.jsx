import { format } from "date-fns";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FcDeleteDatabase } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageTable = ({ post, fetchPosts }) => {
  const handelDelete = (id) => {
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
        fetch(`${import.meta.env.VITE_API_URL}/manage/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              
              fetchPosts();
            }
          });
      }
    });
  };

  return (
    <tr>
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
          <p>{post.needVolunteer}</p>
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
        {/* delete button */}
        <button
          onClick={() => handelDelete(post._id)}
          title="Mark Complete"
          className=""
        >
          <FcDeleteDatabase size={30} />
        </button>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        {/* update button */}
        <Link to={`/update/${post._id}`}>
            <button title="Mark Complete" className="">
              <FiEdit className="text-cyan-400" size={25} />
            </button>
        </Link>
      </td>
    </tr>
  );
};

export default ManageTable;
