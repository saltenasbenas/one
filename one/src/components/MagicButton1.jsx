import { Component } from 'react';



class MagicButton1 extends Component {

    constructor(){
      super();
    }
  
    click = () => {
        this.props.action();
    }
  
    render() {
      return(
        <button className="myButton"  onClick={this.click}>
        {this.props.bname}
        </button>
      )
    }
  }
  export default MagicButton1;