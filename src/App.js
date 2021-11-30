import React from 'react';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      userInfo: {},
      followers: []
    }
  }
  render() {
    return(<div>
      <User />
    </div>);
  }
}

export default App;
