import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reducers from './src/reducers';
import landingPage from './src/pages/landingPage';
import SignUpPage from './src/pages/signUpPage';
import SignInPage from './src/pages/signInPage';

const Stack = createStackNavigator();

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="landing">
          <Stack.Screen name="landing" component={landingPage} />
          <Stack.Screen name="signIn" component={SignInPage} />
          <Stack.Screen name="signUp" component={SignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
