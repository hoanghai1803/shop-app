import React, { Component } from "react";
import SwitchSort from "./sorting/Switch";
import ListGroup from "./ListGroup";
import Items from "./items/Items";
import Navigation from "./BottomNavigation";
import {
  styleListGroup,
  styleItems,
  styleNavigation,
  styleSort
} from "./styles";

class NewFeed extends Component {
  state = {
    currentCategory: "All",
    currentValueNav: 0,
    checkedSort: false, // Check if the sorting switch is actived
    selectedValue: "No Sort" // No sort or sort increase / decrease by price
  };

  handleClickCategory = category => {
    this.setState({
      currentCategory: category
    });
  };

  handleChangeSwitch = event => {
    this.setState({
      checkedSort: !this.state.checkedSort,
      selectedValue: "No Sort"
    });
  };

  handleChangeSort = event => {
    this.setState({ selectedValue: event.target.value });
    console.log(event.target.value);
  };

  handleChangeNavigation = (event, value) => {
    this.setState({
      currentValueNav: value
    });
  };

  render() {
    const {
      currentCategory,
      currentValueNav,
      checkedSort,
      selectedValue
    } = this.state;

    const { items, onClickLike, categories, onClickAdd } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3" style={styleListGroup}>
            <h1>Categories</h1>
            <ListGroup
              categories={categories}
              currentCategory={currentCategory}
              onClickCategory={this.handleClickCategory}
            />
          </div>

          <div className="col" align="center">
            <div style={styleItems}>
              <Items
                items={items}
                onClickLike={onClickLike}
                currentCategory={currentCategory}
                currentValueNav={currentValueNav}
                onClickAdd={onClickAdd}
                selectedValue={selectedValue}
              />
            </div>
            <div style={styleNavigation}>
              <Navigation
                value={currentValueNav}
                onChangeNavigation={this.handleChangeNavigation}
              />
            </div>
          </div>

          <div className="col" style={styleSort}>
            <h1>Sorting</h1>
            <SwitchSort
              checkedSort={checkedSort}
              onChangeSwitch={this.handleChangeSwitch}
              selectedValue={selectedValue}
              onChangeSort={this.handleChangeSort}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewFeed;
