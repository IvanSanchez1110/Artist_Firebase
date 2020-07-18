import React, { Component } from "react";
import Switch from "react-switch";
 
class SwitchExample extends Component {
  constructor(props) {
    super();
    this.state = { checked: false, name: props.name };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label htmlFor="normal-switch" style={{backgroundColor:"#F6F5AE",padding:"2%",marginRight:"1%",borderRadius:"5px"}}>
        <span>{this.state.name}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </label>
    );
  }
}

export default SwitchExample;