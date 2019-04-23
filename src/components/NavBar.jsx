import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { onClickNewFeed, onClickCart, itemAdded } = this.props;

    return (
      <nav className="navbar navbar-dark bg-primary">
        <a
          className="navbar-brand mb-0 h1"
          href="https://www.facebook.com/hoanghai123098"
          target="_blank"
          rel="noopener noreferrer"
        >
          King's Ocean Shop
        </a>
        <button
          className="navbar-brand mb-0 bg-primary"
          onClick={onClickNewFeed}
        >
          New Feed
        </button>
        <button className="navbar-brand mb-0 bg-primary" onClick={onClickCart}>
          Your Cart{" "}
          <span className="badge badge-pill badge-secondary">{itemAdded}</span>
        </button>
      </nav>
    );
  }
}

export default NavBar;
