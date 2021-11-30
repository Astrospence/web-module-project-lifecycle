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
        username: 'Astrospence',
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

  render() {
    console.log('render');
    return(<div>
      <User />
    </div>);
  }
}

export default App;
