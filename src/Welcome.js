import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import firebase from 'react-native-firebase'

import TitleWelcomeScreen from './TitleWelcomeScreen'

const logoSrc = require('./../assets/menu-logo-myscoot.png')

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(user=> {
      setTimeout(()=>{
        this.props.navigation.navigate(user ? 'Home' : 'SignUp')
      },2000)
    })
  }

  render() {
    return (
      <View>
        <TitleWelcomeScreen />
        <View style={styles.screenDiv}>
          <Image source={logoSrc} style={[styles.scootLogo]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenDiv: {
    backgroundColor: '#EBECEC',
    height: '100%',
    width: '100%'
  },
  bgImage: {
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    width: '100%',
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  scootLogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});

export default Welcome
