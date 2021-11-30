import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h3>Followers:</h3>
                <Follower />
            </div>
        )
    }
}

export default FollowerList;