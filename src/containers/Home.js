import React, { Component } from 'react';
// import {
//   View,
//   Text
//  } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Screen,NavigationBar, Title, Tile, Text, View, Button, Image, Overlay, Heading, Divider } from '@shoutem/ui';
// import Icon from 'react-native-vector-icons/FontAwesome';
import LoginPage from '../components/LoginPage';
import { Actions } from 'react-native-router-flux';
 
class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const user = this.props.user;
    return (
      <Screen>
        <Image
          source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
          style={{ width: '100%', height: 70, marginBottom: 10 }}
        >
        </Image>
        <View styleName="wrap">
          {user.authorized === false ? <LoginPage /> : <Button><Text>Let's go chatting</Text></Button> }
        </View>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);