import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewFeed from "./components/newfeed/NewFeed";
import Cart from "./components/cart/Cart";

class App extends Component {
  state = {
    atNewFeed: true,
    items: [
      {
        name: "Iphone XS Max 512GB Gold",
        id: 1,
        src: "https://img.mvideo.ru/Pdb/30040031b.jpg",
        price: "116,990 rub",
        added: false,
        button: "primary",
        message: "Add to cart",
        quantity: 0
      },
      {
        name: "Samsung S10+",
        id: 2,
        src: "https://img.mvideo.ru/Pdb/30042519b.jpg",
        price: "124,990 rub",
        added: false,
        button: "primary",
        message: "Add to cart",
        quantity: 0
      },
      {
        name: "Macbook pro 15",
        id: 3,
        src: "https://img.mvideo.ru/Pdb/30039192b.jpg",
        price: "528,990 rub",
        added: false,
        button: "primary",
        message: "Add to cart",
        quantity: 0
      },
      {
        name: "MSI GT75VR 7RE-054RU Titan SLI",
        id: 4,
        src: "https://img.mvideo.ru/Pdb/30031607b.jpg",
        price: "246,990 rub",
        added: false,
        button: "primary",
        message: "Add to cart",
        quantity: 0
      }
    ]
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

  // When click add, button will change to class "success"
  // with message "Added"
  handleClickAdd = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };

    items[index].added = !items[index].added;
    items[index].button = items[index].added === true ? "success" : "primary";
    items[index].message =
      items[index].added === true ? "Added" : "Add to cart";
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
    // If the quantity equal 0, we will not continue decrease it
    if (!items[index].quantity) return;
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
  // be called to set all states to the initial states. Finally, convert
  // to NewFeed site
  handleClickConfirmPayment = () => {
    alert("Thanks for payment!!!");
    const items = this.state.items.map(item => {
      let newItem = item;
      newItem.added = false;
      newItem.button = "primary";
      newItem.message = "Add to cart";
      newItem.quantity = 0;
      return newItem;
    });
    this.setState({
      items,
      atNewFeed: true
    });
  };

  render() {
    // Calculate sum of quantity of all items
    const quantity = this.state.items
      .map(item => item.quantity)
      .reduce((item1, item2) => item1 + item2, 0);

    return (
      <React.Fragment>
        <NavBar
          quantity={quantity}
          onClickNewFeed={this.handleClickNewFeed}
          onClickCart={this.handleClickCart}
        />

        {/* If atNewFeed = true, render NewFeed */}
        {this.state.atNewFeed && (
          <NewFeed items={this.state.items} onClickAdd={this.handleClickAdd} />
        )}

        {/* If atNewFeed = false, render Cart */}
        {!this.state.atNewFeed && (
          <Cart
            items={this.state.items}
            quantity={quantity}
            onClickIncrement={this.handleClickIncrement}
            onClickDecrement={this.handleClickDecrement}
            onClickReset={this.handleClickReset}
            onClickRemove={this.handleClickRemove}
            onClickConfirmPayment={this.handleClickConfirmPayment}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
