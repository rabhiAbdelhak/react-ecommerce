const dotenv = require("dotenv")
dotenv.config();


const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
    console.log(process.env.REACT_APP_STRIPE_SECRET_KEY)
  if (event.body) {
    const { cart, shipping_fee, total_price } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      return shipping_fee + total_price;
    };
    try {
       const paymentIntent = await stripe.paymentIntents.create(
           {
               amount: calculateOrderAmount(),
               currency : 'usd',
           }
       ) 
       console.log(paymentIntent);
       return {
           statusCode : 200,
           body: JSON.stringify({clientSecret: paymentIntent.client_secret})
       }
    }catch(err){
       return {
           statusCode : 500,
           body: JSON.stringify({error : err.message})
       }
    }
  
  }
  return {
    statusCode: 200,
    body: "payment intent",
  };
};
