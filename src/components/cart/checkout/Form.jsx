import React, { Component } from "react";

class Form extends Component {
  render() {
    const { onClickReturnCart, onClickConfirmPayment } = this.props;

    return (
      <React.Fragment>
        {/* This button will call handleClickReturnCart in Cart.jsx to set checkouting 
        state of this component to false, and render "Cart" instead of "Form" checkout */}
        <button onClick={onClickReturnCart}>Return Cart</button>
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
