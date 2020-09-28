import React, { Component } from "react";
//  import components
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // state = {  }
  render() {
    return (
      <>
        <Burger />
        <div>Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
