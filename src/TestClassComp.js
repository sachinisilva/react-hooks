import React from "react";

class TestClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Foo"
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.title = "Hey"
  }

  // componentDidMount() {
  //   this.title = this.state.name;
  // }

  // componentDidUpdate() {
  //   this.title = this.state.name;
  // }

  handleOnChange(e) {
    this.setState({ name: e.target.value });
  }

 
  render() {
    return (
     <div>
        <h3>{this.title}</h3>    
        <input value={this.state.name}
        onChange={(e) => this.handleOnChange(e)}/>
     </div>
    );
  }
}

export default TestClassComp;
