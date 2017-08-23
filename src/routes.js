import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './containers/Home';
import Chatroom from './components/Messenger';

class Routes extends Component{
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene 
            navigationBarStyle={{display: 'none'}} 
            titleStyle={{color: '#fff'}}
            key="home" component={Home}
            initial={true}
            />
            <Scene 
              navigationBarStyle={{display: 'none'}} 
              key="chatroom" 
              component={Chatroom} />
        </Scene>
      </Router>
    );
  }
}

export default Routes;