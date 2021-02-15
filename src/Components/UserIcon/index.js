/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SvgXml} from 'react-native-svg';
import {squirlce,squirlce_border} from './utils/svg_mask';
import MaskedView from '@react-native-community/masked-view';

var styles = require('./Styles');


const RoomIcon = ({
  path = require('./utils/people.png'),
  width = 40,
  height = 40,
}) => {
  const isImageAcceptable = (url) => {
    const newUrl = url !== undefined && url !== null && url.includes('http') ? {uri: url} : require('./utils/people.png');
    return newUrl;
  };


  return (
    <View style={{width: width,height: height,marginRight: 10,alignSelf: 'center'}}>
      <MaskedView
        maskElement={
          <SvgXml
            fill={'#ffffff'}
            width={width}
            height={height}
            rx={20}
            xml={squirlce()}/>
        }>
            <FastImage
              style={[styles.userIcon,{width: width,height: height}]}
              source={path.uri ? isImageAcceptable(path.uri) : require('./utils/people.png')}
              resizeMode={FastImage.resizeMode.stretch}
            />
         <SvgXml
            width={width}
            height={height}
            style={{position:'absolute'}}
            rx={20}
            xml={squirlce_border('rgba(0,0,0,0.2)')}/>
      </MaskedView>
    </View>
  );
};
export default RoomIcon;
