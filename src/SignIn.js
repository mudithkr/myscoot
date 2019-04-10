import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import firebase from 'react-native-firebase'

class SignIn extends React.Component {
  state = { email: '', password: '', msg: null }

  handleSignIn = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ msg: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
      <Button style={styles.btn} title="SignIn" onPress={this.handleSignIn} color="#e5e5e5"/>
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
          color="#e5e5e5"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  btn: {
    marginTop: 30,
    marginBottom:30
  }
})

export default SignIn
