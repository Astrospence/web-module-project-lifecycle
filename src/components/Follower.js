import React from 'react';

class Follower extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <img src={this.props.img} />
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Follower;