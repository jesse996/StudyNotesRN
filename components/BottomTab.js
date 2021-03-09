import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

import {ButtonGroup, Button, Icon} from 'react-native-elements';

const Tab1 = () => {
  // return [0, 1, 2].map((i) => (
  return (
    <View style={styles.tab}>
      <Icon name="book" verse={true} style={styles.icon} />
      <Text>书架</Text>
    </View>
  );
  // ));
};
const Tab2 = () => {
  // return [0, 1, 2].map((i) => (
  return (
    <View style={styles.tab}>
      <Icon name="layers" verse={true} style={styles.icon} />
      <Text>统计</Text>
    </View>
  );
  // ));
};
const Tab3 = () => {
  // return [0, 1, 2].map((i) => (
  return (
    <View style={styles.tab}>
      <Icon name="explore" verse={true} style={styles.icon} />
      <Text>发现</Text>
    </View>
  );
  // ));
};

const Tab4 = () => (
  // return [0, 1, 2].map((i) => (
  <View style={styles.tab}>
    <Icon name="person" verse={true} style={styles.icon} />
    <Text>我</Text>
  </View>
  // ));
);

const BottomTab = (props) => {
  // const tabs = [
  //   {element: Tab1},
  //   {element: Tab2},
  //   {element: Tab3},
  //   {element: Tab4},
  // ];
  return (
    <View style={styles.container}>
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // textAlign: 'center',
  },
  // wrap: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  tab: {
    flexGrow: 1,
    // width: 46,
    // height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: 56,
    // flexGrow: 1,
  },
  // icon: {
  //   width: 46,
  //   height: 46,
  // },
});
export default BottomTab;
