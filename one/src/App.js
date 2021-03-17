
import './App.css';

import ClassicBox from './components/ClassicBox';
import ClassicRoll from './components/ClassicRoll';
import BoxUniversalum from './components/BoxUniversalum';
import {normalStyle, fancyStyle} from './shared/styles';
import {getRandomInt} from './functions';






function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BoxUniversalum color={'yellow'} number={1} boxStyle={normalStyle} />
        <BoxUniversalum color={'green'} number={getRandomInt(10)} boxStyle={fancyStyle} />
        <ClassicBox button1Title={'Red'} button2Title={'Green'} />
        <ClassicRoll boxStyle={fancyStyle}/>
      </header>
      
    </div>
  );
}

export default App;




// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function BoxOne() { // komponentas , taip pat KOMPONENTAS RASOSI IS DIDZIOSIOS RAIDES!!!!
//   return (
//     <div className="box">1</div>
//   );
// }
// const BoxTwo = () => { // komponentas
//   return (
//     <div className="box">2</div>
//   );
// }
// const BoxThree = () => { // komponentas
//   return (
//     <div className="box">2</div>
//   );
// }


// const BoxRandom = () => { // komponentas
//   return (
//     <div className="box"><span style={fancyStyle}>
//       {getRandomInt(10)}
//     </span>
//     </div>
//   );
// }

// const fancyStyle = {
//   fontSize: '300%',
//   color: 'yellow'
// }
// const normalStyle = {
//   fontSize: '100%',
//   color: 'white'
// }

// const BoxDigit = props => { // komponentas
//   return (

//     <span style={props.boxStyle}>
//       {props.number}
//     </span>

//   );
// }

// const BoxUniversal = props => { // komponentas
//   return (
//     <div className="box" style={{ borderColor: props.color }}>
//       <BoxDigit number={props.number} boxStyle={props.boxStyle} /></div>
//   );
// }

// class ClassicBox extends Component { // Ar klases visada extendina Component ar dar ir kazka kita?

//   constructor() {
//     super();
//     this.state = {
//       clock: new Date(),
//       color: 'white',
      
//     }
//     console.log('CONSTRUCT')
//   }

// componentDidMount() { 
//   console.log('MOUNT')
//  this.timerID = setInterval(()=>this.ticTac(), 1000);
// }
// componentWillUnmount(){ 
//   console.log('UNMOUNT')
//   clearInterval(this.timerID);
// }

// ticTac() {
//   console.log('tic-tac')
//   this.setState ({clock: new Date ()})
// }

// doClick () {
//   console.log('Hello')
// }

// doClick = () => {
//   // console.log('Hello')
//   if (this.state.color === 'red'){
//   this.setState({color: 'white'});
//   }else{
//     this.setState({color: 'red'})
//   }
// }
// doClick2 = () => {
//   // console.log('Hello!', this.setState.color)
//   if(this.state.color === 'pink') {
//     this.setState({color: 'orange'});
//   }
//   else {
//     this.setState({color: 'pink'});
//   }
// }

// doClick3 = (color) => {
//     this.setState({color: color});
// }
//   render() {
//     console.log('RENDER')

//     return (
//       <div className="box" style={{borderColor: this.state.color}}> 
//       <BoxDigit boxStyle={normalStyle} number={this.state.clock.toLocaleTimeString()}/>
//       <button className="myButton" onClick={() => this.doClick3('red')}>MAKE RED</button>
//         <button className="myButton" onClick={() => this.doClick3('green')}>MAKE GREEN</button>
//       {/* <span style={{ color: this.props.color }}>
//           {this.state.clock.toLocaleTimeString()}
//         </span> */}
//       </div>  

//     )
//   }
// }