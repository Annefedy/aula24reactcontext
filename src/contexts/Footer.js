import React from "react";
import ThemeContext from "./Theme";

export default class Footer extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <footer>I'm the footer, with the {this.context} theme </footer>;
  }
}
