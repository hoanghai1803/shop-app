import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Counter from "./Counter";
import Pagination from "./Pagination";

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

// function Counters(props) {
class Counters extends Component {
  state = {
    currentPage: 1
  };

  handleClickPagination = pageID => {
    if (pageID === "-") {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
      return;
    }

    if (pageID === "+") {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
      return;
    }

    this.setState({
      currentPage: pageID
    });
  };

  render() {
    const {
      items,
      onClickIncrement,
      onClickDecrement,
      onClickReset,
      onClickRemove,
      classes
    } = this.props;

    let pages = [];
    // Each page on Cart has at most 2 items
    const numPages = Math.ceil(items.length / 2);
    for (let index = 1; index <= numPages; index++) {
      const page = {
        id: index
      };
      pages.push(page);
    }

    return (
      <React.Fragment>
        {items.length > 0 && (
          <div>
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
                  {/* Each item with its information will be rendered on same row */}
                  {items.map(item => {
                    // Check if this item is on this page
                    const atPage = Math.floor(items.indexOf(item) / 2) + 1;
                    if (atPage === this.state.currentPage)
                      return (
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
                      );
                    return "";
                  })}
                </TableBody>
              </Table>
            </Paper>
            <Pagination
              pages={pages}
              currentPage={this.state.currentPage}
              onClickPagination={this.handleClickPagination}
            />
          </div>
        )}
        {!items.length && <h1>There is nothing in your cart!</h1>}
      </React.Fragment>
    );
  }
}

Counters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Counters);
