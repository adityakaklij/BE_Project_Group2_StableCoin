import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { mintToken } from "./SCinteractions/interact";
export default function App() {
  const [show, setShow] = useState(false);
  const amountRef = useRef();
  const walletRef = useRef();
  async function test() {
    const amount = amountRef.current.value;
    const address = walletRef.current.value;
    let p = await mintToken(amount, address);
    console.log("p", p);
  }
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NhtJ3OCKV9SGLE";
      rzpPaymentForm.appendChild(script);
    }
  });
  const handleClick = () => {
    setTimeout(() => setShow(true), 3000);
  };
  return (
    <div className="App flex flex-col items-center gap-4 mt-10">
      <div className="iputGroup flex flex-col items-center">
        <span>Enter wallet address</span>
        <input type="text" className="border-2" ref={walletRef} required />
      </div>
      <div className="iputGroup flex flex-col items-center">
        <span>Enter amount of token to mint</span>
        <input type="number" className="border-2" ref={amountRef} required />
      </div>
      <form
        id="rzp_payment_form"
        onClick={handleClick}
        className={`${show ? "hidden" : "flex"}`}
      ></form>
      <button onClick={test} className={`border ${show ? "flex" : "hidden"}`}>
        Mint Token
      </button>
    </div>
  );
}
