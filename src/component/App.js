import React from "react";
import "./App.css";
import Button from "./Button";

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="component-app">
        <div className="body">
          <Button
            name="Push"
            clickHandler={function () {
              alert("Hi!, ready to go ?");
            }}
          />
        </div>
      </div>
    );
  }
}
