import React from 'react';
import Hooks from './Hooks';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    add() {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <h1>
                    Du contenue {this.props.name}
                </h1>
                <p>Vous avez {this.state.count} cliquez sur le button pour augmentez</p>
                <button onClick={() =>this.add()}> Ajouter </button>
                <Hooks />
            </div>
        )
    }
}

export default Welcome;