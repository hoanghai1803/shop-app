import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Counters.css";
import Counter from "./Counter";

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class Counters extends Component {
  render() {
    const {
      items,
      onClickIncrement,
      onClickDecrement,
      onClickReset,
      onClickRemove
    } = this.props;

    return (
      <React.Fragment>
        {!items.length && <h1>There is nothing in your cart!</h1>}
        <Table>
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
      </React.Fragment>
    );
  }
}

export default Counters;
