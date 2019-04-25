import React, { Component } from "react";

class Form extends Component {
  // Add commas and unit to price
  formatPrice(p) {
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " rub";
  }

  render() {
    const { items, onClickReturnCart, onClickConfirmPayment } = this.props;

    return (
      <React.Fragment>
        {/* This button will call handleClickReturnCart in Cart.jsx to set checkouting 
        state of this component to false, and render "Cart" instead of "Form" checkout */}
        <button onClick={onClickReturnCart}>Return Cart</button>

        <h1>Receipt</h1>
        <ul className="list-group">
          {items.map(item => (
            <li className="list-group-item">
              <strong>{item.name}</strong>
              <br />
              Price: {this.formatPrice(item.price)} * {item.quantity} ={" "}
              {this.formatPrice(item.price * item.quantity)}
            </li>
          ))}
          <li>
            <h4>Total: </h4>
            {this.formatPrice(
              items
                .map(item => item.price * item.quantity)
                .reduce((item1, item2) => item1 + item2, 0)
            )}
          </li>
        </ul>

        <br />

        <h1>Your Information</h1>
        <form onSubmit={onClickConfirmPayment}>
          <label>
            <input type="text" placeholder="Your name.." required />
            <input type="email" placeholder="Your email.." required />
            <input
              type="number"
              placeholder="Your telephone number.."
              required
            />
            <input type="text" placeholder="Your adress.." required />
          </label>
          <input type="submit" value="Confirm payment!" />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
