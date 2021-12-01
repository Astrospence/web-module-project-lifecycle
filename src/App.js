import React from 'react';
import axios from 'axios';
import User from './components/User';

class App extends React.Component {

  render() {
    console.log('render');
    return(
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input 
            placeholder="enter username"
          />
          <button>Search</button>
        </form>
        <div className="userInfo">
          <img src="" />
          <h3>Spencer Wood</h3>
          <p>username</p>
          <p>total repos</p>
          <p>total followers</p>
        </div>
        <div className="followers">
          <div className="follower">
            <img src="" />
            <p>username</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
