/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import UsersList from './src/screens/UsersList';

const App = ()  => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <UsersList/>
      </SafeAreaView>
    </>
  );
};

export default App;
