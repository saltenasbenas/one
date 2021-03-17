import { Component } from 'react';


class MagicButton extends Component {

    constructor(){
      super();
 
      console.log('CONSTRUCT <--- MagicButton')
    }

    changeColor = () => {
        this.props.action();
    }

    render() {
      return(
        <button className="myButton" style={{backgroundColor:this.props.color}} onClick={this.changeColor}>
        {this.props.bname}
        </button>
      )
    }
  }

  export default MagicButton;