import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import LocationOn from "@material-ui/icons/LocationOn";
import ConfirmButton from "./buttons/ConfirmButton";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

function CheckoutForm(props) {
  const { classes, onClickConfirmPayment } = props;

  return (
    <React.Fragment>
      <h1>Your Information</h1>
      <form onSubmit={onClickConfirmPayment}>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
          required
        />
        <br />

        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Email"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )
          }}
          required
        />

        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Phone number"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            )
          }}
          required
        />
        <br />

        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          multiline
          label="Address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            )
          }}
          required
        />
        <br />

        {/* <input type="submit" value="Confirm payment!" /
        > */}
        <ConfirmButton />
      </form>
    </React.Fragment>
  );
}

CheckoutForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckoutForm);
