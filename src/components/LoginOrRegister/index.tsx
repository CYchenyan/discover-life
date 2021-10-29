import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  type: 'login' | 'register';
  onNext: (username: string, password: string) => {};
};

const title = {
  login: 'Log in',
  register: 'Register',
};

const buttonText = {
  login: 'LOG IN',
  register: 'NEXT',
};

const LoginOrRegister = ({type, onNext}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleNextPress = () => {
    onNext(username, password);
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title[type]}</Text>
      <TextInput
        style={[styles.inputStyle, styles.userInput]}
        placeholder="username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="password"
        textContentType="password"
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
        <Text style={styles.nextText}>{buttonText[type]}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  title: {
    fontSize: 28,
  },
  inputStyle: {
    lineHeight: 32,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    fontSize: 20,
    padding: 8,
  },
  userInput: {
    marginBottom: 16,
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#000',
    marginTop: 16,
  },
  nextText: {
    color: '#fff',
    lineHeight: 52,
    textAlign: 'center',
    fontSize: 18,
  },
});
export default LoginOrRegister;
