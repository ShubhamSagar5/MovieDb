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
  
  const handleCleanSearchText = () => {
      dispatch(setSearchMovieName(''))
    }

  return (
    <div className="bg-[#1e1d1d] sm:py-[1rem]">
      <div className="flex flex-col sm:flex-row sm:mx-[2rem] justify-between items-center">
        <div>
          <Link to={"/"} onClick={handleCleanSearchText}><h2 className="text-2xl sm:text-2xl font-semibold">MovieDb</h2></Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[1rem] mt-2 sm:mt-0">
          <ul className="flex text- sm:text-[1rem]  justify-center gap-[3rem] sm:gap-[1.5rem]">
            <li className="cursor-pointer text-[1.4rem] sm:text-lg" onClick={resetPage} >
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/"} onClick={handleCleanSearchText}
              >
                Popular
              </NavLink>
            </li>
            <li className="cursor-pointer text-[1.4rem] sm:text-lg" onClick={resetPage}>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/topRated"} onClick={handleCleanSearchText}
              >
                TopRated
              </NavLink>{" "}
            </li>
            <li className="cursor-pointer text-[1.4rem] sm:text-lg" onClick={resetPage}>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/upcoming"} onClick={handleCleanSearchText}
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
