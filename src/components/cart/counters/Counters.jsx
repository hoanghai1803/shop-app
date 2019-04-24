import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Counter from "./Counter";

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
      // Use Table template of material-ui
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
      </React.Fragment>
    );
  }
}

export default Counters;
