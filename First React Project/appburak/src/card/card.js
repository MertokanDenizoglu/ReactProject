import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    return (
      <div>
       <section className="container">
        <div className="box">
             <div className="icon">{this.props.icon}</div>
            <h2 class="Title">{this.props.ttl}</h2>
            <p class="text">{this.props.text}</p>
            <div className="arrow">{this.props.icon2}</div>
        </div>
       </section>
      </div>
    );
  }
}
export default Card;
