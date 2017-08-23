const initialState = {
    messages: []
};
const messages = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {...state, messages: state.messages.concat(action.msg)};
		case 'SEND_MESSAGE':
			return [
				...state,
					message(undefined, action)
				]
		default:
			return state
	}
};

export default messages;