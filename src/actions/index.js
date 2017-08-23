import Expo from 'expo';
import firebase from '../firebase';

export function addMessage(msg) {
  return (dispatch) => {
    type: 'ADD_MESSAGE',
    msg
  }
}

export function sendMessage(text) {
  return (dispatch, getState) => {
    const { name, avatar, id } = getState().user;
    let msg = {
      text: text,
      createdAt: Date.now(),
      user: {
        _id: id,
        name: name,
        avatar: avatar
      }
    };
    const newMsgRef = firebase.database()
                              .ref('messages')
                              .push();
    // let msgId = newMsgRef;
    msg._id = newMsgRef.key;
    newMsgRef.set(msg);

    dispatch({
      type: 'ADD_MESSAGE',
      msg
    });
  };
}

export const receivedMessages = () => ({
  type: 'RECEIVED_MESSAGES',
  receivedAt: Date.now()
});

export const fetchMessages = () => {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_MESSAGES' });

    firebase.database()
            .ref('messages')
            .orderByKey()
            .limitToLast(20)
            .on('value', (snapshot) => {
              setTimeout(() => {
                const messages = snapshot.val() || [];
                dispatch(receiveMessages(messages));
              }, 0);
            });
  }
}

export const receiveMessages = (messages) => {
  return function (dispatch) {
    // let newSubMessages = messages;
    // console.log(newSubMessages);
    // newSubMessages.sort((a, b) => {
    //   return b.createdAt - a.createdAt;
    // });
    Object.values(messages).forEach(msg => dispatch({
      type: 'ADD_MESSAGE',
      msg
    }));

    dispatch(receivedMessages());
  }
}

export const updateMessagesHeight = (event) => {
  const layout = event.nativeEvent.layout;

  return {
    type: 'UPDATE_MESSAGES_HEIGHT',
    height: layout.height
  }
}


export const setUserName = (name) => ({
  type: 'SET_USER_NAME',
  name
});

export const setUserAvatar = (avatar) => ({
  type: 'SET_USER_AVATAR',
  avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'
});

export function login() {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_USER_ID',
      id: Expo.Constants.deviceId
    });
    dispatch({
      type: 'USER_START_AUTH',
    });
    firebase.auth()
      .signInAnonymously()
      .then(() => {
        const { name, avatar } = getState().user;
        
        firebase.database()
          .ref(`users/${Expo.Constants.deviceId}`)
          .set({
            id: Expo.Constants.deviceId,
            name,
            avatar
          });
        startChatting(dispatch);
      });
  }
}

export function startChatting(dispatch) {
  dispatch({
    type: 'USER_END_AUTH'
  });
  dispatch(fetchMessages());
}