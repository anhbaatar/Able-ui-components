'use strict';

import {Dimensions} from 'react-native';
const width90 = (Dimensions.get('window').width * 90) / 100;
const React = require('react-native');
let {StyleSheet} = React;
const textInput = {
  width: width90,
  alignSelf: 'center',
  borderBottomWidth: 1,
  borderColor: 'white',
  paddingHorizontal: 10,
  color: 'white',
  fontFamily: 'arialbd',
};
module.exports = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: '#3b4252',
    justifyContent: 'center',
  },
  textInputStyle: Object.assign(textInput, {
    marginBottom: 10,
  }),
  textInputLoginStyle: Object.assign(textInput, {
    marginBottom: 10,
  }),
  buttonStyle: {
    marginTop: 20,
    height: 50,
    width: width90,
    backgroundColor: 'red',
  },
  labelContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  labelFirst: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'arialbd',
    marginRight: 5,
  },
  labelSecond: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'arialbd',
  },
  loaderStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  image: {
    width: 65,
    height: 72,
    alignSelf: 'center',
  },
  Atitle: {
    width: '100%',
    fontFamily: 'Arial',
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    marginVertical: '5%',
  },
  Abody: {
    width: '80%',
    color: '#616161',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: '10%',
  },
  AlertModal: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 40,
  },
});
