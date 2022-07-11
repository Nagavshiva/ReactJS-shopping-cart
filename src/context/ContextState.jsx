import  DataContext  from "./Create";
import React, { useState } from "react";
import products from "../data";

const DataStore = (props) => {
  const [data, setData] = useState(products);
  const [opencart, setOpencart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchString, setSearchString] = useState('');
  const[ totalvalues,setTotalvalues] = useState(0);

  let openCart = () => {
    return setOpencart(!opencart);
  };

  let incrementProductCount = (id) => {
    let findincindex = data.findIndex((obj) => obj.id === id);
    data[findincindex].count = data[findincindex].count + 1;
    setData([...data]);
  };
  let decrementProductCount = (id) => {
    let finddecindex = data.findIndex((obj) => obj.id === id);
    data[finddecindex].count = data[finddecindex].count - 1;
    data[finddecindex].count > 0
      ? setData([...data])
      : (data[finddecindex].count = 1);
  };



  let totalcalc = () => {
   let totalvalues= cartItems.reduce((acc, obj) => {
      return  acc + (obj.quantity * obj.price);   
    }, 0);
    setTotalvalues(totalvalues);
  }




  let addcartItems = (id) => {
    let finddataIndex = data.findIndex((obj) => obj.id === id);
    let findcartIndex = cartItems.findIndex((obj) => obj.id === id);
    cartItems[findcartIndex] = data[finddataIndex];
    data[finddataIndex].isAddedtoCart = true;
    let finaldata =
      findcartIndex >= 0 ? [...cartItems] : [...cartItems, data[finddataIndex]];
    setCartItems(finaldata);
  };

  let cartitemclose = (id) => {
    let finddataIndex = data.findIndex((obj) => obj.id === id);
    data[finddataIndex].isAddedtoCart = false;
    let finditemIndex = cartItems.findIndex((obj) => obj.id === id);
    cartItems.splice(finditemIndex, 1);
    setCartItems([...cartItems]);
  totalcalc();
  };
  return (
    <>
      <DataContext.Provider
        value={{ 
            data,
            openCart,
            incrementProductCount,
            decrementProductCount,
            addcartItems ,
            cartitemclose  ,
            cartItems,
            searchString,
            setSearchString    ,  
            totalcalc ,
            totalvalues
          }}
      >
        {props.children}
      </DataContext.Provider>
    </>
  );
};
export default DataStore;
