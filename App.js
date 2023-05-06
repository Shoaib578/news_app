import React from 'react'
import Routes from './src/routes';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux'
import allReducers from './src/redux/reducers';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';

const store = createStore(allReducers,applyMiddleware(thunk))
const routeNameRef = React.createRef();
const navigationRef = React.createRef()
export default function App() {
  return  <NavigationContainer
  ref={navigationRef}
  onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
  onStateChange={()=>{
    const currentRouteName = navigationRef.current.getCurrentRoute().name
    routeNameRef.current = currentRouteName
  }}>
  <Provider store={store}>
  <Routes routeNameRef={routeNameRef}/>
  </Provider>
  </NavigationContainer>
}


