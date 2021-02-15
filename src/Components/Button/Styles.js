'use strict';

import {Dimensions} from 'react-native';
const width90 = (Dimensions.get('window').width * 90) / 100;
const React = require('react-native');
let {StyleSheet} = React;

module.exports = StyleSheet.create({
  buttonContainer: {
    width: width90,
    height: 50,
    backgroundColor: '#03d7fc',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  loadingButtonContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    padding: 2,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
  },
  loaderStyle: {
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#03d7fc',
    width: 50,
    height: 50,
  },
});
