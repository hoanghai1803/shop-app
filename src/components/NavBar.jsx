import React, { Component } from "react";

class NavBar extends Component {
  getBadgeClasses() {
    let classes = "badge badge-pill badge-";
    classes += this.props.itemsAdded === 0 ? "warning" : "success";
    return classes;
  }

  render() {
    const { onClickNewFeed, onClickCart, itemsAdded } = this.props;

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
          Your Cart <span className={this.getBadgeClasses()}>{itemsAdded}</span>
        </button>
      </nav>
    );
  }
}

export default NavBar;
