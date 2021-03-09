import {View} from 'react-native';
import React, {useState} from 'react';
import {Icon, Input} from 'react-native-elements';
import {ThemeProvider} from 'react-native-elements';

const theme = {
  // Icon: {
  //   name: 'rowing',
  //   reverse: true
  // }
};
const Head = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Icon name='menu-fold' type='antdesign' ></Icon> */}
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Icon name="rowing" reverse onPress={() => console.log('hello')} />
        <Input placeholder="歌曲" />
      </View>
    </ThemeProvider>
  );
};

export default Head;
