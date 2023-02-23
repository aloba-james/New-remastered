require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async(event) => {
    try{
        const {amount} = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create(
            {
                amount,
                currency: "usd",
                payment_type: ["card"]
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringigfy({paymentIntent})
        }
    }
    catch(error){
        console.log({error});

        return{
            statusCode: 400,
            body: JSON.stringify({error})
        }
    }
}