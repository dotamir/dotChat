const initialState = {
  id: null,
  name: null,
  avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
  authorizing: false,
  authorized: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case 'USER_START_AUTH':
      return {...state, authorizing: true};
    case 'SET_USER_ID':
      return {...state, id: action.id}
    case 'SET_USER_NAME':
      return {...state, name: action.name};
    case 'SET_USER_AVATAR':
      return {...state, avatar: action.avatar};
    case 'USER_END_AUTH':
      return {...state, authorizing: false, authorized: true};
    case 'USER_NOT_EXIST':
      return {...state, authorized: false, authorizing: false};
    default:
      return state;
  }
}