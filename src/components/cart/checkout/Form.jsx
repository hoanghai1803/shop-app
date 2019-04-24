import React, { Component } from "react";

class Form extends Component {
  render() {
    const { onClickReturnCart, onClickConfirmPayment } = this.props;

    return (
      <React.Fragment>
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
