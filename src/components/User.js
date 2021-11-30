import React from 'react';
import FollowerList from './FollowerList';

class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h1>GITHUB INFO</h1>
                <input type="text" />
                <button>Search</button>
                <div>
                    <img src={this.props.img}/>
                    <h2>{this.props.name}</h2>
                    <h4>Total Followers: {this.props.totalFollowers}</h4>
                </div>
                <FollowerList followers={this.props.followers} />
            </div>
        )
    }
}

export default User;