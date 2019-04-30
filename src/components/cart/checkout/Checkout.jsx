import React, { Component } from "react";
import CheckoutForm from "./CheckoutForm";
import ReturnButton from "./buttons/ReturnButton";

class Checkout extends Component {
  // Add commas and unit to price
  formatPrice(p) {
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " rub";
  }

  render() {
    const { items, onClickReturnCart, onClickConfirmPayment } = this.props;

    return (
      <React.Fragment>
        <ReturnButton onClickReturnCart={onClickReturnCart} />

        <h1>Receipt</h1>
        <ul className="list-group">
          {items.map(item => (
            <li key={item.id} className="list-group-item">
              <strong>{item.name}</strong>
              <br />
              <i>
                Price: {this.formatPrice(item.price)} * {item.quantity} ={" "}
                {this.formatPrice(item.price * item.quantity)}
              </i>
            </li>
          ))}
          <li>
            {/* Compute total price */}
            <h4>Total: </h4>
            <h3>
              {this.formatPrice(
                items
                  .map(item => item.price * item.quantity)
                  .reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )
              )}
            </h3>
          </li>
        </ul>

        <br />

        {/* Form to fill user's information */}
        <CheckoutForm onClickConfirmPayment={onClickConfirmPayment} />
      </React.Fragment>
    );
  }
}

export default Checkout;
