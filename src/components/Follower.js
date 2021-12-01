import React from 'react';

class Follower extends React.Component {

    render() {
        return (
            <div className="follower">
                <img src={this.props.follower.photo} />
                <p>{this.props.follower.username}</p>
            </div>
        )
    }
}

export default Follower;