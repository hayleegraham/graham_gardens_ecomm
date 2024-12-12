import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { AppContext } from "@/app/components/AppContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function Checkout() {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const {
    cartItems,
    cartQty,
    totalPrice,
    resetCart,
    setCartVisible,
    buyNowItem,
    buyNowPrice,
    removeBuyNow,
    shippingPrice,
  } = useContext(AppContext);
  const checkoutProducts = useRef();
  const currTotalPrice = useRef();
  const currTotalPriceNoShip = useRef();
  const noBuyNowItem = useRef();
  const purchase_items = useRef();
  const currShippingPrice = useRef();

  useEffect(() => {
    currShippingPrice.current = shippingPrice;
    if (!buyNowItem) {
      noBuyNowItem.current = true;
      const checkoutProductsArr = cartItems.map((item) => {
        return item.name;
      });
      checkoutProducts.current = checkoutProductsArr.join(", ");
      currTotalPrice.current = totalPrice
      currTotalPriceNoShip.current = (totalPrice - shippingPrice).toFixed(2);
    } else {
      noBuyNowItem.current = false;
      currTotalPrice.current = buyNowPrice;
      checkoutProducts.current = buyNowItem.name;
      currTotalPriceNoShip.current = (buyNowPrice - shippingPrice).toFixed(2);
    }
  }, [cartItems, totalPrice, buyNowItem, buyNowPrice, shippingPrice]);

  if (!buyNowItem) {
    purchase_items.current = cartItems.map((item) => {
      return {
        name: item.name,
        unit_amount: {
          currency_code: "USD",
          value: item.price,
        },
        quantity: item.qty,
      };
    });
  } else {
    purchase_items.current = 
      [{
        name: buyNowItem.name,
        unit_amount: {
          currency_code: "USD",
          value: buyNowItem.price,
        },
        quantity: buyNowItem.qty,
      }]
  }
  
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: currTotalPrice.current,
            breakdown: {
              item_total: {
                unit_amount: cartQty,
                currency_code: "USD",
                value: currTotalPriceNoShip.current,
              },
              shipping: {
                currency_code: "USD",
                value: currShippingPrice.current,
              },
              description: "breakdown",
            },
          },
          items: purchase_items.current,
        },
      ],
    });
  };
  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      setCartVisible(false);
      
      if (noBuyNowItem.current == true) {
        resetCart();
      } else {
        removeBuyNow();
      }
      alert(`Thank you for your purchase ${name}! A confirmation will be sent to your email.`);
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
