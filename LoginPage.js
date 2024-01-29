import {Link} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import A from 'react-native-a';
import LinearGradient from 'react-native-linear-gradient';
const LoginScreen = ({navigation}) => {
  const [PhoneNum, SetPhoneNum] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#DDE5F4', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone No"
          placeholderTextColor="#000000"
          onChangeText={text => SetPhoneNum(text)}
          value={PhoneNum}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#000000"
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigation("Home")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 17, color: '#000000'}}>
            Already Have You Account
          </Text>

          <A style={{textAlign: 'center', fontSize: 17, padding: 15}}>
            Sign Up
          </A>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#F1F7FE', // Transparent background
    // borderWidth: 1,
    marginTop: 200,
    width: 320,
    marginLeft: 40,
    shadowColor: '#000000',
 
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 3,
    borderRadius: 30,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#3E4684',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 16,
    color: '#000000',
    paddingLeft: 15,
    shadowColor: '#F1F7FE',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  button: {
    backgroundColor: '#3E4684',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LoginScreen;
