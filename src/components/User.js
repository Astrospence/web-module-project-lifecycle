import React from 'react';
import axios from 'axios';
import FollowerList from './FollowerList';

class User extends React.Component {

    render() {
        return(
            <div className="userInfo">
                <img src={this.props.user.photo} />
                <h2>{this.props.user.name}</h2>
                <p>Username: {this.props.user.username}</p>
                <p>Total Repos: {this.props.user.totalRepos}</p>
                <p>Total Followers: {this.props.user.totalFollowers}</p>
            </div>
        )
    }
}

export default User;