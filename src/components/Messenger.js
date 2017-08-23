import React from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Spinner } from '@shoutem/ui';
import { fetchMessages, sendMessage } from '../actions';

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  isFetching: state.chat.meta.isFetching,
  user: state.user
});

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onSend(){
    this.props.dispatch(sendMessage(this.state.text));
  }
  render() {
    const isFetching = this.props.isFetching;
    this.props.messages.messages.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    if(isFetching) {
      return(
        <View styleName="vertical v-center h-center">
          <Spinner style={{ marginTop: 20 }} />
        </View>
      );
    } else {
      return(
        <GiftedChat
          text={this.state.text}
          onInputTextChanged={(text) => this.setState({text})}
          messages={this.props.messages.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: this.props.user.id,
          }} />
      );
    }
  }
}

export default connect(mapStateToProps)(Chatroom);