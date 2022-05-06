import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {useNavigate} from 'react-router-dom';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

//local imports
import { useUserContext } from "../contexts/user_context";
import { useCartContext } from "../contexts/cart_context";
import { formatPrice } from "../Utilities/helpers";
import { mobile } from "../Utilities/Responsive";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const FormCheckout = () => {
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  //imports from contexts
  const { isUser, user } = useUserContext();
  const { cart, shipping_fee, total_price, clearCart} = useCartContext();
  const navigate = useNavigate();

  //states
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  //createPayementIntent()
  const createPayementIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_price })
      );
      setClientSecret(data.clientSecret);
    } catch (err) {
      setClientSecret(err.response);
    }
  };

  //useEffect
  useEffect(() => {
    createPayementIntent();
    //eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setDisabled(e.empty);
    console.log(e);
    setError(e.error ? e.error.message : '');
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setProcessing(true);
    const payload = stripe.confirmCardPayment(clientSecret, {
      payment_method : {
        card :  elements.getElement(CardElement)
      }
    })
    if(payload.error){
       setError('payment failed : ' + payload.error.message);
       setProcessing(false);
    }else {
      setSucceeded(true);
      setProcessing(false);
      setError(null);
      setTimeout(() => {
         clearCart();
         navigate('/');
      }, 5000)
    }
  };
  return (
    <FormWrapper>
      {succeeded ? (
        <article>
          <p>
            <strong>Thank You </strong> {isUser && user.name}
          </p>
          <p>
            <strong>Payment Status: </strong>{" "}
            Succesful
          </p>
          <p>
            <strong>Redirect :</strong>Home page in few secondes
          </p>
        </article>
      ) : (
        <article>
          <p>
            <strong>Hello : </strong> {isUser && user.name}
          </p>
          <p>
            <strong>Your total to pay is :</strong>{" "}
            {formatPrice(total_price + shipping_fee)}
          </p>
          <p>
            <strong>test Card number :</strong>4242 4242 4242 4242
          </p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="payment-element" options={cardStyle} onChange={handleChange}/>
        <button disabled={processing || succeeded || disabled} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {succeeded && (
          <div className={`result-message  success ${!succeeded && "hidden"}`}>
            Payment succeeded, see the result on  <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          </div>
        )}
        {error && <div className="result-message error">{error}</div>}
      </form>
    </FormWrapper>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper className="container">
      <Elements stripe={promise}>
        <FormCheckout />
      </Elements>
    </Wrapper>
  );
};

export default StripeCheckout;

const Wrapper = styled.section`
  padding: 20px 0;
`;

const FormWrapper = styled.div`
  article {
    width: 70vw;
    margin: 20px auto;
    ${mobile({ width: "90vw" })};
  }

  article p {
    color: var(--neutral-light);
    font-size: 16px;
    font-weight: 500;
  }

  article strong {
    color: var(--secondary-color);
    font-size: 17px;
    letter-spacing: 1px;
    margin-right: 20px;
    text-transform: capitalize;
  }
  form {
    width: 70vw;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 20px;
    margin: 0 auto;
    ${mobile({ width: "90vw" })};
  }
  input {
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
    margin-top: 10px;
  }

  .result-message.error{
    color: tomato;
  }

  .result-message.success{
    color: darkgreen;
  }

  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
    color: darkgreen;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: var(--primary-color);
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
    margin-top: 20px;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;
