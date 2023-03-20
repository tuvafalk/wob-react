import React from "react";

class Games extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }
    increment () {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render(){
        const {cost} = this.props
        return(
                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="src/kat4.png"><img src="https://brave-pebble-0432f1103.2.azurestaticapps.net/src/kat5.png" alt="kategori" /></a>
                        <div className="desc">
                        <h2>{cost}</h2>
                        <br/>
                        <h2>du har {this.state.counter}st i korgen</h2>
                        <button className="buy" onClick={() => this.increment()}>Köp</button>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Games;