import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IEXtkG8PENacaQfb7PUuwiPGKkMjEuKP1eb5VZ5kpoTuOSZSAPVLbY5yyj3V5J2rVgz1p5baUHRFpBn5fxrQ85A00XYSxsUJQ";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Mental Health"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total is: $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
