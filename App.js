import React from 'react';
import { View, Text } from 'react-native';
import Home from './Src/Components/Home';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './Redux/Reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Src/Components/MainScreen';
const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MainScreen'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
