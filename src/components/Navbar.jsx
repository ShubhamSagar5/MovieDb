import React from "react";
import Searchbar from "./Searchbar";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../store/PaginationSlice";

const Navbar = () => {
  
  const dispatch = useDispatch()
  const resetPage = () => {
    dispatch(setPage(1))
  }
  
  return (
    <div className="bg-[#1e1d1d] py-[1rem]">
      <div className="flex mx-[2rem] justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">MovieDb</h2>
        </div>
        <div className="flex items-center gap-[1rem]">
          <ul className="flex text-[1rem]  justify-center gap-[1.5rem]">
            <li className="cursor-pointer text-lg" onClick={resetPage} >
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/"}
              >
                Popular
              </NavLink>
            </li>
            <li className="cursor-pointer text-lg" onClick={resetPage}>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/topRated"}
              >
                TopRated
              </NavLink>{" "}
            </li>
            <li className="cursor-pointer text-lg" onClick={resetPage}>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/upcoming"}
              >
                Upcoming
              </NavLink>{" "}
            </li>
          </ul>
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
