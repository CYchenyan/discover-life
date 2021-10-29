/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {BackButton, Link, NativeRouter, Route} from 'react-router-native';
import Home from './src/pages/Home';
import Landing from './src/pages/Landing';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const App = () => {
  return (
    <NativeRouter>
      <BackButton>
        <SafeAreaView>
          {false && (
            <View style={styles.nav}>
              <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Home</Text>
              </Link>
              <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>About</Text>
              </Link>
              <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Topics</Text>
              </Link>
            </View>
          )}

          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
        </SafeAreaView>
      </BackButton>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
