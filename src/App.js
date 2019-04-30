import React, { Component } from "react";
import { categories, data } from "./data/data";
import NavBar from "./components/NavBar";
import NewFeed from "./components/newfeed/NewFeed";
import Cart from "./components/cart/Cart";

class App extends Component {
  state = {
    atNewFeed: true,
    items: data,
    categories: categories
  };

  // Switch between Newfeed and Cart
  handleClickNewFeed = () => {
    this.setState({
      atNewFeed: true
    });
  };

  handleClickCart = () => {
    this.setState({
      atNewFeed: false
    });
  };

  //Function to switch between like and unlike
  handleClickLike = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };

    items[index].liked = !items[index].liked;

    this.setState({ items });
  };

  // When click add, button will change to class "success"
  // with label "Added"
  handleClickAdd = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };

    items[index].added = !items[index].added;
    items[index].button = items[index].added === true ? "success" : "primary";
    items[index].label = items[index].added === true ? "Added" : "Add to cart";
    // When click "Add to cart", default quantity will be 1
    items[index].quantity = items[index].added === true ? 1 : 0;

    this.setState({ items });
  };

  // Click button "+" on site "Cart" will call this function
  // to increase quantity of item
  handleClickIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity++;
    this.setState({ items });
  };

  // Click button "-" on site "Cart" will call this function
  // to decrease quantity of item
  handleClickDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity--;
    this.setState({ items });
  };

  // This function is called when the button "Reset" on cart site is clicked
  // Set item's quantity to 0 but will not remove it from cart
  handleClickReset = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity = 0;
    this.setState({ items });
  };

  // If the "Remove" button on site cart is called, this function is called
  // This function will call the handleClickAdd() function to set this item
  // to the initial value
  handleClickRemove = item => {
    this.handleClickAdd(item);
  };

  // After fill information and confirm on the checkout site, this function will
  // be called to set all states to the initial states, but will not reset liked
  // items. Finally, switch to NewFeed site
  handleClickConfirmPayment = () => {
    alert("Thanks for payment!!!");
    const items = this.state.items.map(item => {
      let newItem = item;
      newItem.added = false;
      newItem.button = "primary";
      newItem.label = "Add to cart";
      newItem.quantity = 0;
      return newItem;
    });
    this.setState({
      items,
      atNewFeed: true
    });
  };

  render() {
    const { atNewFeed, items, categories } = this.state;

    // Calculate sum of quantity of all items
    const quantity = items
      .map(item => item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      <React.Fragment>
        <NavBar
          quantity={quantity}
          onClickNewFeed={this.handleClickNewFeed}
          onClickCart={this.handleClickCart}
        />

        {/* If atNewFeed = true, render NewFeed */}
        {atNewFeed && (
          <div style={{ marginTop: "80px" }}>
            <NewFeed
              items={items}
              onClickLike={this.handleClickLike}
              categories={categories}
              onClickAdd={this.handleClickAdd}
            />
          </div>
        )}

        {/* If atNewFeed = false, render Cart */}
        {!atNewFeed && (
          <div style={{ marginTop: "100px" }}>
            <Cart
              items={items}
              quantity={quantity}
              onClickIncrement={this.handleClickIncrement}
              onClickDecrement={this.handleClickDecrement}
              onClickReset={this.handleClickReset}
              onClickRemove={this.handleClickRemove}
              onClickConfirmPayment={this.handleClickConfirmPayment}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
