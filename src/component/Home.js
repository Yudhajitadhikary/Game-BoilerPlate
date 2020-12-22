import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.history.push({
              pathname: "/game",
              data: [{ name: "Yudha" }], // your data array of objects
            });
          }}
        >
          Hello
        </button>
      </div>
    );
  }
}

