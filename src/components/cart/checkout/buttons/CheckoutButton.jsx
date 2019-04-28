import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import NavigateNext from "@material-ui/icons/NavigateNext";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

// This button will call handleClickCheckout function in Cart.jsx to set
// checkouting state of this component to true, and render Checkout instead of Cart
function CheckoutButton({ classes, onClickCheckout }) {
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={onClickCheckout}
    >
      Checkout
      <NavigateNext className={classes.rightIcon} />
    </Button>
  );
}

CheckoutButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckoutButton);
