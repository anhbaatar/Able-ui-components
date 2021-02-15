/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {app_logo} from '../../assets/icons/svg_icons';
const styles = require('./Styles');
const App = ({
  value = '',
  inputStyle = {},
  placeholder = 'Хайх',
  onChangeText = () => {},
  activeBorderHeight = 3,
  inActiveBorderHeight = 1,
  placeholderColor = '#7f879d',
  svgPath = (color) => app_logo(color),
  iconWidth = 20,
  iconHeight = 30,
  containerStyle = {},
  activeIconColor = 'white',
  activeBorderColor = 'white',
  inActiveIconColor = 'white',
  inActiveBorderColor = 'white',
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.textInputContainerStyle, containerStyle]}>
      <View style={styles.inputIconContainer}>
        <TextInput
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={[styles.textInputStyle, inputStyle]}
        />
        <SvgXml
          style={styles.iconStyle}
          fillAll={focused ? activeIconColor : inActiveIconColor}
          width={iconWidth}
          height={iconHeight}
          xml={svgPath(focused ? activeIconColor : inActiveIconColor)}
        />
      </View>
      <View
        style={[
          styles.bottomBorder,
          {
            height: focused ? activeBorderHeight : inActiveBorderHeight,
            borderRadius:
              (focused ? activeBorderHeight : inActiveBorderHeight) / 2,
            backgroundColor: focused ? activeBorderColor : inActiveBorderColor,
          },
        ]}
      />
    </View>
  );
};

export default App;
