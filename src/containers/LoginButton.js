import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Text } from '@shoutem/ui';
import { fetchMessages, login } from '../actions';
import { Actions } from 'react-native-router-flux';

class LoginButton extends Component {
	onLogin = () => {
		this.props.dispatch(login());
		this.props.dispatch(fetchMessages());
		Actions.chatroom();
	}

	render() {
		return (
			<Button styleName="dark" onPress={this.onLogin}>
				<Text>Start Chat</Text>
			</Button>
		)
	}
}

export default connect()(LoginButton);