'use strict';

import {Dimensions} from 'react-native';
const width90 = (Dimensions.get('window').width * 90) / 100;
const React = require('react-native');
let {StyleSheet} = React;

module.exports = StyleSheet.create({
  textInputContainerStyle: {
    width: width90,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textInputStyle: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  bottomBorder: {
    width: '100%',
    height: 1,
    borderRadius: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    marginRight: 10,
  },
  inputIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
