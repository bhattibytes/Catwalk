import React from 'react';
import $ from 'jquery';

 class AddToBag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseEnter(e) {
    this.setState({
      mouseOver: !this.state.mouseOver
    });
  }

  mouseOut(e) {
    this.setState({
      mouseOver: !this.state.mouseOver
    });
  }
  render (props) {
    return (
      <div className="AddToBag">
        <button className={ "AddToBagBtn" + (this.state.mouseOver ? " bag-hover" : "")} onClick={this.props.addToCart} onMouseEnter={this.mouseEnter} onMouseOut={this.mouseOut}>ADD TO BAG</button>
      </div>
    )
  }
}

export default AddToBag;

