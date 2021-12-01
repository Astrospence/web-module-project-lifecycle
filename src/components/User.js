import React from 'react';
import axios from 'axios';
import FollowerList from './FollowerList';

class User extends React.Component {

    render() {
        return(
            <div className="userInfo">
                <img src={this.props.photo} />
                <h3>{this.props.name}</h3>
                <p>{this.props.username}</p>
                <p>{this.props.totalRepos}</p>
                <p>{this.props.totalFollowers}</p>
            </div>
        )
    }
}

export default User;