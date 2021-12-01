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
          photo: 'https://avatars.githubusercontent.com/u/40877149?v=4',
          username: 'brudnak'
        },
        {
          photo: 'https://avatars.githubusercontent.com/u/87831982?v=4',
          username: 'jimlemoine'
        }
      ]
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(resp => {
      this.setState({
        ...this.state,
        user: resp.data.login,
        userInfo: {...this.userInfo, name: resp.data.name,
                                     photo: resp.data.avatar_url,
                                     username: resp.data.login,
                                     totalRepos: resp.data.public_repos,
                                     totalFollowers: resp.data.followers
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(resp => {
        this.setState({
          ...this.state,
          followers: resp.data
        })
      })
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
