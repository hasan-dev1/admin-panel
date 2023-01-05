import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div>
        <div className="w-4/5 mx-auto min-h-[70vh] bg-indigo-50">
          <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center">
            <div className=" lg:text-end text-center lg:w-1/5 py-3 px-1 mt-4">
              <ul>
                <li>
                  <NavLink
                    to={"/dashboard/addproduct"}
                    className={({ isActive }) =>
                      isActive
                        ? "shadow-xl p-1 block border-r-4 border-primary bg-indigo-300 rounded-r-sm"
                        : " p-1 block"
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/editproduct"}
                    className={({ isActive }) =>
                      isActive
                        ? "shadow-xl p-1 block border-r-4 border-primary bg-indigo-300 rounded-r-sm"
                        : " p-1 block"
                    }
                  >
                    Edit Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/allseller"}
                    className={({ isActive }) =>
                      isActive
                        ? "shadow-xl p-1 block border-r-4 border-primary bg-indigo-300 rounded-r-sm"
                        : " p-1 block"
                    }
                  >
                    All Seller
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/alluser"}
                    className={({ isActive }) =>
                      isActive
                        ? "shadow-xl p-1 block border-r-4 border-primary bg-indigo-300 rounded-r-sm"
                        : " p-1 block"
                    }
                  >
                    All User
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className=" lg:flex-1 w-full py-3 px-1 text-center">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;