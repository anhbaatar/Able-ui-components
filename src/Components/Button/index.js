/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  LayoutAnimation,
} from 'react-native';
import {width90} from '../../assets/dimensions/width';
const styles = require('./Styles');
const App = ({
  containerStyle = {
    width: width90,
    height: 50,
    backgroundColor: '#03d7fc',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  customLoaderStyle = {
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#03d7fc',
    width: 50,
    height: 50,
  },
  labelStyle = {},
  label = 'Нэвтрэх',
  showIndicator = true,
  onPress = () => {},
}) => {
  const [loader, showLoader] = useState(false);

  return (
    <TouchableOpacity
      onPress={async () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.scaleXY);
        showLoader(true);
        await onPress();
        showLoader(false);
      }}
      style={
        loader
          ? [containerStyle, styles.loadingButtonContainer]
          : [styles.buttonContainer, containerStyle]
      }>
      {loader && showIndicator ? (
        <ActivityIndicator
          style={[styles.loaderStyle, customLoaderStyle]}
          color={'white'}
          size={'large'}
        />
      ) : (
        <Text style={[styles.buttonLabel, labelStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default App;
