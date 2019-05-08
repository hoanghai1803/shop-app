import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import deepOrange from "@material-ui/core/colors/deepOrange";
import Radio from "@material-ui/core/Radio";
import TrendingUp from "@material-ui/icons/TrendingUp";
import TrendingDown from "@material-ui/icons/TrendingDown";

const styles = theme => ({
  rootIncrease: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  rootDecrease: {
    color: deepOrange[600],
    "&$checked": {
      color: deepOrange[500]
    }
  },
  checked: {},
  rootIcon: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 30
  }
});

const RadioButtons = ({ classes, selectedValue, onChangeSort }) => {
  return (
    <div>
      <Radio
        checked={selectedValue === "Increase"}
        onChange={onChangeSort}
        value="Increase"
        name="radio-button-Increase"
        aria-label="Increase"
        classes={{
          root: classes.rootIncrease,
          checked: classes.checked
        }}
      />{" "}
      Increase
      <TrendingUp className={classes.icon} />
      <br />
      <Radio
        checked={selectedValue === "Decrease"}
        onChange={onChangeSort}
        value="Decrease"
        name="radio-button-Decrease"
        aria-label="Decrease"
        classes={{
          root: classes.rootDecrease,
          checked: classes.checked
        }}
      />{" "}
      Decrease
      <TrendingDown className={classes.icon} />
    </div>
  );
};

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
