import React, {useState, useEffect} from 'react';
import {
  View,
  Keyboard,
  LayoutAnimation,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {chat_icon_line, app_logo} from '../../assets/icons/svg_icons';
import {SvgXml} from 'react-native-svg';
import Button from '../../Components/Button/index';
import TextInput from '../../Components/TextInput';
import Modal from 'react-native-modal';

const styles = require('./Styles');
const Login = ({
  svgPath = app_logo('white'),
  rootStyle = {},
  iconStyle = {
    alignSelf: 'center',
    marginBottom: 30,
    position: 'absolute',
    top: '15%',
  },
  activeIconColor = 'white',
  activeBorderColor = 'white',
  inActiveIconColor = 'white',
  inActiveBorderColor = 'white',
  activeBorderHeight = 1,
  inActiveBorderHeight = 3,
  inputStyle = {marginBottom: 20},
  buttonStyle = {},
  customLoaderStyle = {},
  labelFirst = 'Able',
  labelSecond = 'Component',
  onPressLogin = () => {},
  showAuthWindowNext = () => {},
}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hideIcon, showIcon] = useState(false);
  const [modalVisible, showModal] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    showIcon(true);
  };

  const _keyboardDidHide = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    showIcon(false);
  };
  return (
    <View style={[styles.rootContainerStyle, rootStyle]}>
      {!hideIcon && (
        <SvgXml
          style={iconStyle}
          fill={'white'}
          width="80"
          height="80"
          xml={svgPath}
        />
      )}
      <View style={styles.labelContainer}>
        <Text style={styles.labelFirst}>{labelFirst}</Text>
        <Text style={styles.labelSecond}>{labelSecond}</Text>
      </View>
      <TextInput
        svgPath={chat_icon_line}
        value={userName}
        placeholder={'name'}
        onChangeText={(text) => setUserName(text)}
        activeIconColor={activeIconColor}
        activeBorderColor={activeBorderColor}
        inActiveIconColor={inActiveIconColor}
        inActiveBorderColor={inActiveBorderColor}
        inActiveBorderHeight={inActiveBorderHeight}
        activeBorderHeight={activeBorderHeight}
        containerStyle={inputStyle}
      />
      <TextInput
        svgPath={chat_icon_line}
        value={password}
        onChangeText={(text) => setPassword(text)}
        activeIconColor={activeIconColor}
        activeBorderColor={activeBorderColor}
        inActiveIconColor={inActiveIconColor}
        inActiveBorderColor={inActiveBorderColor}
        inActiveBorderHeight={inActiveBorderHeight}
        activeBorderHeight={activeBorderHeight}
        containerStyle={inputStyle}
      />
      <Button
        containerStyle={[styles.buttonStyle, buttonStyle]}
        customLoaderStyle={[styles.loaderStyle, customLoaderStyle]}
        onPress={async () => {
          const showAuth = await onPressLogin();
          if (showAuth === 'show_auth') {
            showModal(true);
          }
          console.log(showAuth);
        }}
      />
      <Modal
        onBackdropPress={() => showModal(false)}
        onBackButtonPress={() => showModal(false)}
        isVisible={modalVisible}>
        <View style={styles.AlertModal}>
          <Image source={require('./Assets/hacker.png')} style={styles.image} />
          <Text style={styles.Atitle}>{'Хэрэглэгчийг \nбаталгаажуулах'}</Text>
          <Text style={styles.Abody}>
            {
              'Таны нэвтрэлт өмнөх түүхээсээ\n өөр байгаа тул аюулгүй байдлыг хангах үүднээс, таныг мөн эсэхийг нууцлалын кодоор баталгаажуулах цонх!'
            }
          </Text>
          <Button
            containerStyle={{width: '80%',backgroundColor:'#8892a0'}}
            label={'Кодоор нэвтрэх'}
            onPress={() => {
              showAuthWindowNext(true);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
export default Login;
