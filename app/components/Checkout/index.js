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
  const noBuyNowItem = useRef();
  const purchase_items = useRef();

  useEffect(() => {
    if (!buyNowItem) {
      noBuyNowItem.current = true;
      const checkoutProductsArr = cartItems.map((item) => {
        return item.name;
      });
      checkoutProducts.current = checkoutProductsArr.join(", ");
      currTotalPrice.current = totalPrice;
    } else {
      noBuyNowItem.current = false;
      checkoutProducts.current = buyNowItem.name;
      currTotalPrice.current = buyNowPrice;
    }
  }, [cartItems, totalPrice, buyNowItem, buyNowPrice]);

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
  console.log(purchase_items);
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
                value: currTotalPrice.current - shippingPrice,
              },
              shipping: {
                currency_code: "USD",
                value: shippingPrice,
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
      console.log(noBuyNowItem.current);
      if (noBuyNowItem.current == true) {
        resetCart();
      } else {
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
