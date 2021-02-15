/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SvgXml} from 'react-native-svg';
import {squirlce_moon,squirlce_border_moon,squirlce_border,squirlce} from './utils/svg_mask';
import MaskedView from '@react-native-community/masked-view';

var styles = require('./Styles');
export const RoomIcon = ({
  width = 60,
  height = 60,
  borderColor = 'rgba(0,0,0,0.15)',
  totalCount = 5,
  array = [require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png'),require('./utils/people.png')],
  extraCount = (array.length - totalCount + 1) > 0 ? array.length - (totalCount) : 0,
  displayArray = array.slice(0,totalCount + 1),
}) => {

  const absolutPos = {position: 'absolute'};
  const viewContainerStyle = (index) => {
    return {width: width,height: height,alignSelf: 'center',position: 'absolute',left: index !== 0 ? (width * index) / 1.2 : 0};
  };
  const isImageAcceptable = (url) => {
    const newUrl = url !== undefined && url !== null && url.includes('http') ? {uri: url} : require('./utils/people.png');
    return newUrl;
  };

  return (
    <View style={[styles.mainContainer,{height: height,width: ((width / 1.2) * displayArray.length)}]}>
      {displayArray.map((item,index) => {
        if (index !== displayArray.length - 1) {
          return <View style={viewContainerStyle(index)}>
            <MaskedView
              maskElement={
                <SvgXml
                  fill={'#ffffff'}
                  width={width}
                  height={height}
                  rx={20}
                  xml={squirlce_moon()} />
              }>
              <FastImage
                style={[styles.userIcon,{width: width,height: height}]}
                source={item.uri ? isImageAcceptable(item.uri) : require('./utils/people.png')}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <SvgXml
                width={width}
                height={height}
                style={absolutPos}
                rx={20}
                xml={squirlce_border_moon(borderColor)} />
            </MaskedView>
          </View>;
        } else {
          return <View style={viewContainerStyle(index)}>
            <MaskedView
              maskElement={
                <SvgXml
                  fill={'#ffffff'}
                  width={width}
                  height={height}
                  rx={20}
                  xml={squirlce()} />
              }>
              {extraCount > 0 ?
                <View style={[styles.userIcon,{width: width,height: height}]}>
                  <Text style={styles.extraCountStyle}>+ {extraCount}</Text>
                  <SvgXml
                    width={width}
                    height={height}
                    style={absolutPos}
                    rx={20}
                    xml={squirlce_border(borderColor)} />
                </View> :
                <>
                  <FastImage
                    style={[styles.userIcon,{width: width,height: height}]}
                    source={item.uri ? isImageAcceptable(item.uri) : require('./utils/people.png')}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <SvgXml
                    width={width}
                    height={height}
                    style={absolutPos}
                    rx={20}
                    xml={squirlce_border(borderColor)} />
                </>}

            </MaskedView>
          </View>;
        }
      })}
    </View>
  );
};
export default RoomIcon;
