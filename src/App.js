import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  constructor() {
    super() ;
    this.state = {
      user: 'Astrospence',
      userInfo: {
        name: '',
        photo: '',
        username: '',
        totalRepos: '',
        totalFollowers: ''
      },
      followers: [
        {
          photo: '',
          username: ''
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input 
            placeholder="enter username"
          />
          <button>Search</button>
        </form>

        <User user={this.state.userInfo} />

        <FollowerList followers={this.state.followers} />

      </div>
    );
  }
}

export default App;
