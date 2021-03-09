import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
import {Button, Header, Icon, Overlay, SearchBar} from 'react-native-elements';

const AddBook = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const handleSearch = (v) => {
    setSearch(v);
  };
  return (
    // <Text>test</Text>
    <>
      <View style={styles.container}>
        <Icon
          name="chevron-back-outline"
          type="ionicon"
          style={styles.leftIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <SearchBar
          value={search}
          onChangeText={handleSearch}
          containerStyle={styles.center}
          platform="ios"
        />
        {/* 二维码扫描 */}
        {/* <Icon name="scan-outline" type="ionicon" style={styles.rightIcon} /> */}
      </View>
      <Button
        title="show"
        onPress={() => {
          setShowOverlay(true);
        }}
      />
      <Overlay
        fullScreen={false}
        isVisible={showOverlay}
        onBackdropPress={() => {
          setShowOverlay(false);
        }}>
        <>
          <Text>hahah</Text>
          <View>
            <Text>hahah</Text>
          </View>
        </>
      </Overlay>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  // leftIcon: {
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // flexBasis: 60,
  // },
  center: {
    flexGrow: 1,
    flexBasis: 100,
  },
  // rightIcon: {
  //   // flex: 2,
  // },
});

export default AddBook;
