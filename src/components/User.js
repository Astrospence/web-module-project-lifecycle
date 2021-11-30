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
                    <img/>
                    <h2>Name</h2>
                    <h4>Total Followers</h4>
                </div>
                <FollowerList />
            </div>
        )
    }
}

export default User;