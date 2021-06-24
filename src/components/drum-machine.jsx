import React from 'react';
import '../assets/css/drumMachine.css';
import DrumPad from './drum-pad.jsx'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.createPads = this.createPads.bind(this);
    }
    state = {
        keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
    }
    createPads() {


    }
    
    render() {
        const { keys } = this.state;
        return (
            <div id="drum-machine" className="container">
                <div className="row mt-5 justify-content-center mb-3">
                    <div className="col-md-6">
                        <div id="display">
                            <div id="pads" className="pads">
                                {
                                    keys.map((key, index) => {
                                        return <DrumPad text={key} key={index} ref={this.PadRef} />
                                    })
                                }
                            </div>
                            <div id="pad-info" className="pad-info">
                                <div id="pad-info-container" className="pad-info-container">
                                    <span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumMachine;