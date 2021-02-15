'use strict';
const React = require('react-native');
let {StyleSheet} = React;

module.exports = StyleSheet.create({
  userIcon: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  extraCountStyle: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    fontFamily: 'arialbd',
  },
});
