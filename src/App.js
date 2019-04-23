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

  handleClickAdd = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].added = !items[index].added;
    items[index].button = items[index].added === true ? "success" : "primary";
    items[index].message =
      items[index].added === true ? "Added" : "Add to cart";
    items[index].quantity = items[index].added === true ? 1 : 0;
    this.setState({ items });
  };

  handleClickIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity++;
    this.setState({ items });
  };

  handleClickDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (!items[index].quantity) return;
    items[index].quantity--;
    this.setState({ items });
  };

  handleClickReset = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].quantity = 0;
    this.setState({ items });
  };

  handleClickRemove = item => {
    this.handleClickAdd(item);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          itemsAdded={this.state.items.filter(item => item.added).length}
          quantity={this.state.items
            .map(item => item.quantity)
            .reduce((item1, item2) => item1 + item2, 0)}
          onClickNewFeed={this.handleClickNewFeed}
          onClickCart={this.handleClickCart}
        />
        {this.state.atNewFeed && (
          <NewFeed items={this.state.items} onClickAdd={this.handleClickAdd} />
        )}
        {!this.state.atNewFeed && (
          <Cart
            items={this.state.items}
            onClickIncrement={this.handleClickIncrement}
            onClickDecrement={this.handleClickDecrement}
            onClickReset={this.handleClickReset}
            onClickRemove={this.handleClickRemove}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
