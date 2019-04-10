import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity, Button, BackHandler, ImageBackground } from 'react-native'
import Hamburger from 'react-native-hamburger'

import * as data from './../localDB/db.json'

import firebase from 'react-native-firebase'
import Results from './Results'

const frontImage = require('./../assets/home.jpeg')

class Home extends React.Component {
  state = {
    currentUser: null,
    active: false
  }
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
      this.props.navigation.goBack(null);
      return true;
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <ImageBackground style={[styles.mainImg]} source={frontImage} />
        <View style={[styles.header]}>
          <Hamburger
            style={[styles.hamburger]}
            active={this.state.active}
            type="spinArrow"
            color="white"
            onPress={()=> this.setState({active: !this.state.active})}
          />
          <Text style={[styles.title]}>MyScoot Task</Text>
        </View >
        {
          this.state.active
          ? <View style={[styles.menu]} >
              <Button
                style={[styles.btn]}
                onPress={()=>{this.props.navigation.navigate('Sponsors',{"sponsors":data.sponsors})}}
                title="SPONSORS"
                color="#999"
                accessibilityLabel="SPONSORS"
              />
              <Button
                style={[styles.btn]}
                onPress={()=>{this.props.navigation.navigate('DeveloperList',{"developer":data.developer})}}
                title="DEVELOPER"
                color="#999"
                accessibilityLabel="DEVELOPER"
              />
              <Button
                style={[styles.btn]}
                onPress={()=>{this.props.navigation.navigate('SelectedEvents',{"tEvents":data.tEvents})}}
                title="EVENTS"
                color="#999"
                accessibilityLabel="EVENTS"
              />
              <Button
                style={[styles.btn]}
                onPress={()=>{this.props.navigation.navigate('SignIn')}}
                title="SIGN OUT"
                color="#999"
                accessibilityLabel="SIGN OUT"
              />
            </View>
            : null
        }
        <View style={[styles.mainView]}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Results',{"results":data.results})}} >
            <Text style={[styles.btnMain]}>Results</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DeveloperList',{"developer":data.developer})}} >
            <Text style={[styles.btnMain]}>Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SelectedEvents',{"tEvents":data.tEvents})}} >
            <Text style={[styles.btnMain]}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Workshop')}} >
            <Text style={[styles.btnMain]}>Android Workshop</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    right: 0,
    left: 0,
    top: 0,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 0
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingLeft: 80
  },
  hamburger:{
    top: 0,
    left: 0
  },
  menu: {
    left: 0,
    top: 55,
    width: '80%',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    opacity: 1

  },
  btn: {
    padding: 20,
    backgroundColor: 'rgba(255,0,0,0.5)',
    marginTop: 10,
    marginBottom:10,
    fontSize: 15
  },
  mainView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 300
  },
  mainImg: {
    width: '70%',
    height: '30%',
    top: '20%',
    position: 'absolute'
  },
  btnMain: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 12,
    backgroundColor: "#e5e5e5",
    color: '#333',
    padding: 12,
    textAlign: 'center',
    fontSize: 20
  }
})

export default Home
