import React from "react";
import Searchbar from "./Searchbar";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../store/PaginationSlice";
import { setSearchMovieName } from "../store/MovieSlice";

const Navbar = () => {
  
  const dispatch = useDispatch()
  

  
  const handleRestPageAndSearchText = () => {
    console.log("fofo")  
    dispatch(setSearchMovieName(''))
      dispatch(setPage(1))
    }

  return (
    <div className="bg-[#1e1d1d] sm:py-[1rem]">
      <div className="flex flex-col sm:flex-row sm:mx-[2rem] justify-between items-center">
        <div>
          <Link to={"/"} ><h2 className="text-2xl sm:text-2xl font-semibold" onClick={handleRestPageAndSearchText}>MovieDb</h2></Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[1rem] mt-2 sm:mt-0">
          <ul className="flex text- sm:text-[1rem]  justify-center gap-[3rem] sm:gap-[1.5rem]">
            <li className="cursor-pointer text-[1.4rem] sm:text-lg" onClick={handleRestPageAndSearchText} >
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/"}
              >
                <span>Popular</span>
              </NavLink>
            </li>
            <li className="cursor-pointer text-[1.4rem] sm:text-lg" onClick={handleRestPageAndSearchText}>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to={"/topRated"} 
              >
                TopRated
              </NavLink>{" "}
            </li>
            <li className="cursor-pointer text-[1.4rem] sm:text-lg" onClick={handleRestPageAndSearchText}>
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
