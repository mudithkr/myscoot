import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Welcome from './Welcome'
import Sponsors from './Sponsors'
import DeveloperList from './DeveloperList'
import SelectedEvents from './SelectedEvents'
import SubEvents from './SubEvents'
import EventInfo from './EventInfo'
import Results from './Results'
import Workshop from './Workshop'

const App = SwitchNavigator(
  {
    Home,
    SignIn,
    SignUp,
    Welcome,
    Sponsors,
    DeveloperList,
    SelectedEvents,
    SubEvents,
    EventInfo,
    Results,
    Workshop
  },
  {
    initialRouteName: 'Welcome'
  }
)

export default App
