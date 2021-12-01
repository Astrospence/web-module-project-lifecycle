import React from 'react';

class Follower extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="follower">
                <img src={this.props.photo} />
                <p>{this.props.username}</p>
            </div>
        )
    }
}

export default Follower;