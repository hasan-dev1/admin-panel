import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const [editproduct, setEditProduct] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/productview`)
      .then((res) => res.json())
      .then((data) => {
        setEditProduct(data);
        setLoading(false)
      });
  }, []);

  const handledelete = (e)=>{
    fetch(`http://localhost:5000/productview/delete?id=${e}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      setLoading(true);

      fetch(`http://localhost:5000/productview`)
        .then((res) => res.json())
        .then((data) => {
          setEditProduct(data);
          setLoading(false);
        });
    })
  }

  return (
    <div className="mt-4">
      <h1 className="m-4 text-xl font-bold text-slate-400">
        Edit Your Product
      </h1>
      <div className="overflow-x-auto lg:w-2/3 mx-2 lg:mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-indigo-300"></th>
              <th className="bg-indigo-300">Image</th>
              <th className="bg-indigo-300">Name</th>
              <th className="bg-indigo-300">Price</th>
              <th className="bg-indigo-300">Details</th>
              <th className="bg-indigo-300"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              editproduct?.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <img
                      className="w-7 h-7 rounded-full"
                      src={item?.image}
                      alt=""
                    />
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>{item?.details?.slice(0, 15) + "..."}</td>
                  <td>
                    <div>
                      <Link to={`/dashboard/productcorrection/${item?._id}`}>
                        <button className="ml-2">
                          {" "}
                          <FaEdit className="text-indigo-400"></FaEdit>
                        </button>
                      </Link>
                      <button
                        onClick={() => handledelete(item?._id)}
                        className="ml-2"
                      >
                        {" "}
                        <FaTrash className="text-red-400"></FaTrash>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditProduct;
