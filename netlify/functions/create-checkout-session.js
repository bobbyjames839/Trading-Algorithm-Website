const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      'price': 'price_1OOQElGbVAl2XET16cyOo0pS',
      'quantity': 1,
      /*price_data: {
        currency: 'usd',
        product_data: {
          name: 'Your Product Name',
        },
        unit_amount: 2799, 
      },
      quantity: 1,*/
    }],
    mode: 'payment',
    success_url: `${process.env.YOUR_DOMAIN}/success`,
    cancel_url: `${process.env.YOUR_DOMAIN}/cancel`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(session),
  };
};