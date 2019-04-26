import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Send from "@material-ui/icons/Send";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

function ConfirmButton(props) {
  const { classes } = props;

  return (
    <Button
      variant="contained"
      color="default"
      type="submit"
      className={classes.button}
    >
      Confirm Payment
      <Send className={classes.rightIcon} />
    </Button>
  );
}

ConfirmButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConfirmButton);
