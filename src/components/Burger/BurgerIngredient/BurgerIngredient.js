import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        // console.log(ingredient);
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        // console.log(ingredient);

        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        // console.log(ingredient);

        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        // console.log(ingredient);

        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        // console.log(ingredient);

        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        // console.log(ingredient);

        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
