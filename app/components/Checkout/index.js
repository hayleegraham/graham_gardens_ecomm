import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { AppContext } from "@/app/components/AppContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function Checkout() {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { cartItems, totalPrice, resetCart, setCartVisible, buyNowItem, buyNowPrice, removeBuyNow } = useContext(AppContext);
  const checkoutProducts = useRef();
  const currTotalPrice = useRef();
  const noBuyNowItem = useRef();

  useEffect(() => {
    if(!buyNowItem) {
        noBuyNowItem.current = true;
        const checkoutProductsArr = cartItems.map((item)=>{
          return item.name ;
        })
        checkoutProducts.current = checkoutProductsArr.join(", ");
        currTotalPrice.current = totalPrice;
    }else{
        noBuyNowItem.current = false;
        checkoutProducts.current = buyNowItem.name;
        currTotalPrice.current = buyNowPrice;
    }
    console.log("buy now Price:", buyNowPrice)
}, [cartItems, totalPrice, buyNowItem, buyNowPrice])
    
    const onCreateOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: currTotalPrice.current,
            },
            description: checkoutProducts.current
          },
        ],
      });
    };
  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      setCartVisible(false);
      console.log(noBuyNowItem.current)
      if(noBuyNowItem.current == true){
          resetCart();
      }else{
        removeBuyNow();
      }
      console.log(`Transaction completed by ${name}`);
    });
  };
  return (
    <div className="checkout">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
}
