import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Reducers from './reducers';
import reduxThunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
// import Drawer from 'react-native-drawer';
// import DrawerInside from './components/DrawerInside';


export default class Index extends Component {
  render (){
    return (
        <Provider store={createStore(Reducers, devToolsEnhancer({ realtime: true }), applyMiddleware(reduxThunk))}>
          <Routes/>
        </Provider>
    );
  }
}