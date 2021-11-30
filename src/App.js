import React from 'react';
import axios from 'axios';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      userInfo: {
        photo: '',
        username: '',
        totalFollowers: ''
      },
      followers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userInfo.username}`)
    .then(resp => {
      const newUserInfo = {
        photo: resp.data.avatar_url,
        username: resp.data.login,
        totalFollowers: resp.data.followers
      }
      this.setState({
        ...this.state,
        user: resp.data.name,
        userInfo: newUserInfo
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userInfo.username !== this.state.userInfo.username) {
      axios.get(`https://api.github.com/users/${this.state.userInfo.username}/followers`)
      .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data
      })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  render() {
    console.log('render');
    return(<div>
      <User img={this.state.userInfo.photo} 
            name={this.state.user} 
            totalFollowers={this.state.userInfo.totalFollowers}
            followers={this.state.followers} />
    </div>);
  }
}

export default App;
