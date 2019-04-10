import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, Button, ImageBackground, BackHandler } from 'react-native'

import Hamburger from 'react-native-hamburger'
import { showMessage, hideMessage } from 'react-native-flash-message'

const bgImg = require('./../assets/bgImg.jpeg')
import Home from './Home'
import SignIn from './SignIn'

class EventInfo extends React.Component{
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={
      active: false
    }
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

  render() {
    const { navigation } = this.props
    const subEventsObj = navigation.getParam('subEventsObj')
    return (
      <View style={[styles.container]}>
        <ImageBackground style={styles.bgImg} source={bgImg} />
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
                onPress={()=>{this.props.navigation.navigate('Home')}}
                title="HOME"
                color="#999"
                accessibilityLabel="HOME"
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
        <View style={styles.sponsorDiv}>
          <Text style={styles.heading}>{subEventsObj.name}</Text>
          <View>
            <Text style={styles.details}>Time Limit : {subEventsObj.timeLimit}</Text>
            <Text style={styles.details}>No. of rounds : {subEventsObj.rounds}</Text>
            <Text style={styles.details}>Fees : {subEventsObj.fees}</Text>
            <Text style={styles.details}>No. of participants per team : {subEventsObj.participants}</Text>
            <Text style={styles.details}>Description : {subEventsObj.description}</Text>
          </View>
        </View>
        <Button
          onPress={() => {
            showMessage({
              message: "Applied",
              type: "info",
            });
          }}
          title="Apply"
          color="#841584"
          style={styles.applyBtn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  bgImg: {
    width:'100%',
    position:'absolute',
    top:0,
    bottom:0,
    alignSelf: 'stretch'
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
    marginBottom: 0,
    position: 'absolute'
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
    top: 55,
    left: '-10%',
    width: '80%',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 1
  },
  btn: {
    padding: 20,
    backgroundColor: 'rgba(255,0,0,0.5)'
  },
  sponsorDiv: {
    marginTop: '30%'
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    color: '#555'
  },
  details: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left'
  },
  applyBtn: {
    marginTop: 40
  }
})

export default EventInfo
