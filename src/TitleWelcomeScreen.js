import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


const Header = () => {
  return (
    <View>
      <Text style={[styles.title]}>MyScoot Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});

export default Header
