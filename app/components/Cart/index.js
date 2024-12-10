"use-client";
import { useEffect, useContext, useRef } from "react";
import { Drawer } from "flowbite";
import { AppContext } from "@/app/components/AppContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from '@/app/components/Checkout';

export default function Cart() {
  const initialOptions = {
    "client-id": "AaC6E4A48eQHxuQ-VJAWU0AVh8mIkcof2KyhbUzqNDIOyNZO9P0BjYE_atEUgOo_fqMic1YXQ6dEOhWZ",
    currency: "USD",
    intent: "capture",
  };
  const { cartVisible, setCartVisible, cartItems, totalPrice, removeProduct } = useContext(AppContext);
  const drawer = useRef();

  const options = {
    placement: "right",
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: "",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
    onHide: () => {
      setCartVisible(false);
      console.log("drawer is hidden");
    },
    onShow: () => {
      console.log("drawer is shown");
    },
    onToggle: () => {
      console.log("drawer has been toggled");
    },
  };
  const instanceOptions = {
    id: "drawer-right-example",
    override: true,
  };

  useEffect(() => {
    
    const $targetEl = document.getElementById("drawer-right-example");
    drawer.current = new Drawer($targetEl, options, instanceOptions);

  }, []);
 
  useEffect(() => {
    if(cartVisible == true){
      showDrawer();
    }else{
      hideDrawer();
    }
  }, [cartVisible])

  const showDrawer = () => {
    drawer.current.show()
  }

  const hideDrawer = () => {
    drawer.current.hide();
    if(cartVisible == true){
      setCartVisible(false);
    }
  }

  return (
      
      <>
      {/* drawer component */}
        <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-96 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="inline-flex items-center mb-4 h-[36px] text-xl font-semibold bg-[#cbe2d3] w-full">
          <h4 id="drawer-right-label" className="pl-[6px]">Cart</h4>
          <button
          onClick={hideDrawer}
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-3.75 end-4 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close cart</span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
        {cartItems?.map((item) => (
              <div
              key={item.name}
              className="flex flex-row justify-between gap-[10px] px-[12px]">
                <div className="w-[178px]">{item.name}</div> 
                <div>x {item.qty}</div> 
                <div>${item.price}</div>
                <button className="self-end"
                onClick={() => removeProduct(item.name)}>
                  <span className="material-symbols-outlined">delete</span>
               </button>
              </div>
            ))}
            <hr></hr>
            <div className="flex flex-row gap-[10px] mb-[20px] pl-[10px] font-semibold">
              <div className="">Subtotal:</div>
              <div>${totalPrice}</div>
            </div>
        </div>
      <PayPalScriptProvider options={initialOptions}>
          <Checkout />
      </PayPalScriptProvider>
      </div>
    </>
  );
}
