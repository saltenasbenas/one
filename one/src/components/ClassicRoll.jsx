import { Component } from 'react';
import MagicButton1 from './MagicButton1';
import Dice from './Dice';



function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
class ClassicRoll extends Component {
    constructor() {
        super();
        this.state = {
            random: '',
            color: 'yellow',
            color1: 'white'

        }
        console.log('CONSTRUCT <--- ClassicRoll')
    }

    click = () => {

        this.setState({
            random: getRandomInt(6),
            color: 'white',
            color1: 'yellow',
        });
    }
    render() {
        console.log('RENDER <--- ClassicRoll')
        return (
            <div className="roll">
                <div className="box" style={{ borderColor: this.state.color }} >
                    <MagicButton1 action={this.click} bname={'Click Here'}></MagicButton1>

                </div>
                <div className="box" style={{ borderColor: this.state.color1 }}>
                <Dice value={this.state.random}></Dice>
                </div>
            </div>

        )
    }
}

export default ClassicRoll;