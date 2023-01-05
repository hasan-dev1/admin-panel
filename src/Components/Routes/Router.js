import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddProduct from '../Pages/Dashboard/DashChild/AddProduct';
import AllSeller from '../Pages/Dashboard/DashChild/AllSeller';
import AllUser from '../Pages/Dashboard/DashChild/AllUser';
import EditProduct from '../Pages/Dashboard/DashChild/EditProduct';
import ProductCorrection from '../Pages/Dashboard/DashChild/ProductCorrection';
import ProductEditpage from '../Pages/Dashboard/DashChild/ProductCorrection';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/addproduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/editproduct",
            element: <EditProduct></EditProduct>,
          },
          {
            path: "/dashboard/allseller",
            element: <AllSeller></AllSeller>,
          },
          {
            path: "/dashboard/alluser",
            element: <AllUser></AllUser>,
          },
          {
            path: "/dashboard/productcorrection/:id",
            loader: ({ params }) => fetch(`http://localhost:5000/productview/one?id=${params.id}`),
            element: <ProductCorrection></ProductCorrection>,
          },
        ],
      },
    ],
  },
]);

export default router;