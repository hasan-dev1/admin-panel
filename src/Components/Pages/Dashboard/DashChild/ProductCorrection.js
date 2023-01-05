import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ProductCorrection = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleeditedproduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;
    const details = form.detailes.value;

    const newproduct = {
      name,
      price,
      image,
      details,
    };

    fetch(`https://dhimans-server.vercel.app/updateproduct?id=${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/dashboard/editproduct");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1 className="m-4 text-xl font-bold text-slate-400">
        Update Your Product
      </h1>
      <div className="lg:ml-12 mx-12">
        <form onSubmit={handleeditedproduct}>
          <div className="flex lg:flex-row flex-col justify-between items-center mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Product Name
            </p>
            <input
              name="name"
              className="w-full focus:outline-none mx-4 p-1"
              type="text"
              defaultValue={product?.name}
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Add Selling Price
            </p>
            <input
              name="price"
              className="w-full focus:outline-none mx-4 p-1"
              type="text"
              defaultValue={product?.price}
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Add Image Link
            </p>
            <input
              name="image"
              className="w-full focus:outline-none mx-4 p-1"
              type="text"
              defaultValue={product?.image}
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-start mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Details
            </p>
            <textarea
              name="detailes"
              className="w-full focus:outline-none lg:mx-4 p-1 rounded"
              id=""
              cols="10"
              rows="4"
              defaultValue={product?.details}
            ></textarea>
          </div>

          <div className="text-end">
            <button className="btn btn-primary btn-sm pt-1 px-12 mr-3 mt-6">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCorrection;
