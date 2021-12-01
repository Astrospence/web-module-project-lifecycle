import React from 'react';

class Follower extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <div className="follower">
                <img src={this.props.follower.photo} />
                <p>{this.props.follower.username}</p>
            </div>
        )
    }
}

export default Follower;