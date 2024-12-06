import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { AppContext } from "@/app/components/AppContext";
import { useContext } from "react";

export default function Checkout() {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { cartItems, totalPrice } = useContext(AppContext);

  const checkoutProductsArr = cartItems.map((item)=>{
    return item.name ;
  })
  const checkoutProducts = checkoutProductsArr.join(", ");
  console.log("checkout items", checkoutProducts)
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
          description: checkoutProducts
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
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
