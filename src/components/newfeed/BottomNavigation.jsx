import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EuroSymbol from "@material-ui/icons/EuroSymbol";

const styles = {
  root: {
    width: 500
  }
};

const Navigation = ({ value, onChangeNavigation, classes }) => {
  return (
    <div align="center">
      <BottomNavigation
        value={value}
        onChange={onChangeNavigation}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Timeline" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Discount" icon={<EuroSymbol />} />
      </BottomNavigation>
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
