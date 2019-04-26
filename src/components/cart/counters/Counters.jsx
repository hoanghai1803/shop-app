import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Counter from "./Counter";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function Counters(props) {
  const {
    items,
    onClickIncrement,
    onClickDecrement,
    onClickReset,
    onClickRemove,
    classes
  } = props;

  return (
    <React.Fragment>
      {/* Use Table template of material-ui */}
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <h1>Items</h1>
              </TableCell>
              <TableCell align="center">
                <h1>Information</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Each item will be rendered on same row */}
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell key="item">
                  <img src={item.src} alt={item.name} />
                </TableCell>
                <TableCell key="info">
                  <Counter
                    key={item.id}
                    item={item}
                    onClickIncrement={onClickIncrement}
                    onClickDecrement={onClickDecrement}
                    onClickReset={onClickReset}
                    onClickRemove={onClickRemove}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      {!items.length && <h1>There is nothing in your cart!</h1>}
    </React.Fragment>
  );
}

Counters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Counters);
