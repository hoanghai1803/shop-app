import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import NavigateBefore from "@material-ui/icons/NavigateBefore";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

// This button will call handleClickReturnCart function in Cart.jsx to set
// checkouting state of this component to false, and render Cart instead of Checkout
const ReturnButton = ({ onClickReturnCart, classes }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={onClickReturnCart}
    >
      <NavigateBefore className={classes.leftIcon} />
      Return Cart
    </Button>
  );
};

ReturnButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReturnButton);
