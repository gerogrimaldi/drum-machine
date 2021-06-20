import React from 'react';
import '../assets/css/drumMachine.css'
import sounds from "./audio-files.jsx"

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: {}
        }
    }
    // playing the sound by click or key pressed
    playSound = () => {
        const sound = document.getElementById(this.state.key.keyTrigger);
        if (sound){
            // add class active and animation
            const parent = (sound.parentNode).parentNode;
            parent.classList.add("active"); 
            //play sound
            sound.currentTime = 0;
            sound.volume = 0.4
            sound.play();
            //show text
            const display = document.getElementById("pad-info");
            display.querySelector('h3').innerText = this.state.key.id;
            //remove class active
            sound.addEventListener('ended', () => {
                parent.classList.remove("active");
                // display.querySelector('h3').innerText = "";
            })
        }
    }
    // save key on state
    saveKey = () => {
        const key = sounds.find(obj => {
            return obj.keyTrigger === this.props.text
        })
        this.setState({
            key: key
        })
    }
    // check if key pressed is associated to a pad
    handleKey = (event) => {
        if (event.keyCode === this.state.key.keyCode) {
            this.playSound();
          }
    }
    showInfo = () => {

    }
    // save key and event listener
    componentDidMount() {
        this.saveKey()
        document.addEventListener('keydown', this.handleKey)
    }
    render() {
        const href = "#" + this.state.key.keyTrigger
        return (
            <div className="btn drum-pad" onClick={this.playSound} id={this.state.key.id}>
                <a href={href}> {this.props.text}
                    <audio src={this.state.key.url} className="clip" id={this.state.key.keyTrigger} />
                </a>
            </div>
        )
    }
}

export default DrumPad;