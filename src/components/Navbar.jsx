import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/Create";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(DataContext);
  return (
    <>
    <nav class="navbar  fixed-top">
  <div class="container-fluid">
  <NavLink to="/" className="navbar-brand">Shoplux</NavLink>
    <form class="d-flex input-pro" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-info" type="submit">Search</button>
    </form>
    <NavLink to='/items'>
  <FaShoppingBag className="shopping-icon" />
  {cartItems.length > 0 && (
    <div className="item-count">
      <span className="position-absolute top-0 start-96 my-3 mx-4 translate-middle badge rounded-pill bg-danger">
        {cartItems.length}
      </span>
    </div>
  )}
  </NavLink>
  </div>
</nav>
 
    </>
  );
};
export default Navbar;

