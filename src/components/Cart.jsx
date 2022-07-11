import { useContext } from "react";
import DataContext from "../context/Create";
import Rating from "./Rating";


const Cart = () => {
  const { data, addcartItems} = useContext(DataContext);

  return (
    <div
      className="container"
      style={{ display: "flex", flexWrap: "row wrap" }}
    >
         
      <div className="row ">
        {data.map((product) => (
        
              <div
                className="card my-4 mx-5  p-3 mb-5 "
                style={{
                  width: "15rem",
                  display: "flex",
                  flexWrap: "row wrap",
                  height: "400px",
                  marginTop:'20px'
                }}
                key={product.id}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "150px", width: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-name">{product.name}</h6>
                  <h5 className="card-title">${product.price}</h5>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                  <button
                    className="btn  btn-outline-dark my-4"
                    onClick={() => addcartItems(product.id)}
                    disabled={product.isAddedtoCart ? true : false}
                  >
                    {!product.isAddedtoCart ? "Add to cart" : "Incart"}
                  </button>
                </div>
              </div>
        ))}
      </div>

    </div>
  );
};

export default Cart;
