import React, { Component } from "react";
import ListGroup from "./ListGroup";
import Items from "./items/Items";
import Navigation from "./BottomNavigation";

class NewFeed extends Component {
  state = {
    currentCategory: "All",
    currentValueNav: 0
  };

  handleClickCategory = category => {
    this.setState({
      currentCategory: category
    });
  };

  handleChangeNavigation = (event, value) => {
    this.setState({
      currentValueNav: value
    });
  };

  render() {
    const { currentCategory, currentValueNav } = this.state;

    const { items, onClickLike, categories, onClickAdd } = this.props;

    const styleListGroup = {
      marginTop: "100px",
      position: "fixed",
      zIndex: 1
    };

    return (
      <div className="row">
        <div className="col-2" style={styleListGroup}>
          <h1>Categories</h1>
          <ListGroup
            categories={categories}
            currentCategory={currentCategory}
            onClickCategory={this.handleClickCategory}
          />
        </div>
        <div className="col">
          <Items
            items={items}
            onClickLike={onClickLike}
            currentCategory={currentCategory}
            currentValueNav={currentValueNav}
            onClickAdd={onClickAdd}
          />
          <div>
            <Navigation
              value={currentValueNav}
              onChangeNavigation={this.handleChangeNavigation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewFeed;
