import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useHistory} from 'react-router';

const Landing = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/login');
  };
  const handleRegister = () => {
    history.push('/register');
  };
  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register} onPress={handleRegister}>
        <Text style={[styles.buttonText, styles.registerText]}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    margin: 20,
  },
  login: {
    flex: 1,
    borderRadius: 8,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: 8,
  },
  register: {
    backgroundColor: '#000',
    flex: 1,
    borderRadius: 8,
  },
  buttonText: {
    lineHeight: 52,
    textAlign: 'center',
  },
  registerText: {
    color: '#fff',
  },
});

export default Landing;
