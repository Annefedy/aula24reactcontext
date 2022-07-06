import React from "react";
import ThemeContext from "./Theme";

export default class Body extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <section>I'm the body, with the {this.context} theme</section>;
  }
}
