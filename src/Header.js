// import React from 'react';
// import { StyleSheet, Image, Text, View, Button } from 'react-native';
// import Hamburger from 'react-native-hamburger'
//
// import * as data from './../localDB/db.json'
//
// import Sponsors from './Sponsors'
// import Developer from './Developer'
// import Team from './Team'
// import Events from './Events'
//
// class Header extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: false
//     }
//   }
//   render() {
//     const { navigate } = this.props.navigation
//     return (
//       <View style={[styles.nav]}>
//         <View style={[styles.header]}>
//           <Hamburger
//             style={[styles.hamburger]}
//             active={this.state.active}
//             type="spinArrow"
//             color="white"
//             onPress={()=> this.setState({active: !this.state.active})}
//           />
//           <Text style={[styles.title]}>MyScoot Task</Text>
//         </View >
//         {
//           this.state.active
//           ? <View style={[styles.menu]} >
//               <Button
//                 style={[styles.btn]}
//                 onPress={()=>{this.props.navigation.navigate('Sponsors',{"sponsors":data.sponsors})}}
//                 title="SPONSORS"
//                 color="#999"
//                 accessibilityLabel="SPONSORS"
//               />
//               <Button
//                 style={[styles.btn]}
//                 onPress={()=>{this.props.navigation.navigate('Developer')}}
//                 title="DEVELOPER"
//                 color="#999"
//                 accessibilityLabel="DEVELOPER"
//               />
//               <Button
//                 style={[styles.btn]}
//                 onPress={()=>{this.props.navigation.navigate('Team')}}
//                 title="TEAM"
//                 color="#999"
//                 accessibilityLabel="TEAM"
//               />
//               <Button
//                 style={[styles.btn]}
//                 onPress={()=>{this.props.navigation.navigate('Events')}}
//                   title="EVENTS"
//                 color="#999"
//                   accessibilityLabel="EVENTS"
//               />
//             </View>
//             : null
//         }
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   nav: {
//     marginTop: 0,
//     marginLeft: 0,
//     flex:1,
//     alignSelf: 'flex-start',
//     width: '100%'
//   },
//   header: {
//     right: 0,
//     left: 0,
//     top: 0,
//     alignSelf: 'stretch',
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     backgroundColor: '#000',
//     paddingTop: 10,
//     paddingBottom: 10,
//     marginBottom: 0
//   },
//   title: {
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Roboto',
//     fontWeight: 'bold',
//     paddingLeft: 80
//   },
//   hamburger:{
//     top: 0,
//     left: 0
//   },
//   menu: {
//     left: 0,
//     top: 55,
//     width: '80%',
//     flexWrap: 'wrap',
//     flexDirection: 'column',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     position: 'absolute',
//     opacity: 1
//
//   },
//   btn: {
//     padding: 20,
//     backgroundColor: 'rgba(255,0,0,0.5)'
//   }
// });
//
// export default Header
