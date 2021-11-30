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
                {this.props.followers.map(item => {
                    return <Follower key={item.id} img={item.avatar_url} name={item.login} />
                })}
                
                
            </div>
        )
    }
}

export default FollowerList;