import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/Create";
import { MdClose } from "react-icons/md";
const CartItems = () => {
  const {
    decrementProductCount,
    incrementProductCount,
    cartItems,
    cartitemclose,
    totalvalues
  } = useContext(DataContext);
  return (
    <>
      {cartItems.length !== 0 ? 
          cartItems.map((data) => (
            <div className="items-info ">
              <div className="product-img">
                <img src={data.image} alt="tp" />
              </div>

              <div className="title">
                <h2>{data.name}</h2>
              </div>
              <div className="add-minus-quantity">
                <i
                  className="fas fa-minus minus"
                  onClick={() => decrementProductCount(data.id)}
                ></i>
                <input type="text" placeholder={data.count} />
                <i
                  className="fas fa-plus add"
                  onClick={() => incrementProductCount(data.id)}
                ></i>
              </div>
              <div className="price">
                <span className="cartprice">
                  {data.count} x {data.price} =
                </span>{" "}
                <span className="cartprice">
                  Rs.{Math.floor(data.count * data.price)}
                </span>
              </div>
              <div className="remove-item">
                <MdClose onClick={() => cartitemclose(data.id)} />
              </div>
              
            </div>
            
          )): 
        <div className=" my-5" style={{display:'flex', flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>
          <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-outline-illustration-sign-isolated-contour-symbol-173223244.jpg" style={{width:'13rem'}} alt="" />
          <h1>Your basket is empty </h1>
          <h6>Add items to it now</h6>
          <Link to='/'>
          <button className="btn btn-primary" style={{width:'190px'}}>Shop now</button>
          </Link>
        </div>
        
      }
    </>
  );
};

export default CartItems;
