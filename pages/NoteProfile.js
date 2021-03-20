import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Touchable} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
import {Divider, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  itemWrap: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  itemBG: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: -5,
  },
  itemDivider: {
    marginVertical: 10,
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  full: {
    color: '#2b78fe',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});

const data = [
  {
    content:
      '书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中的句子书中子书中的句子书中的句子书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
  {
    content: '书中的句子',
    note: '笔记，心得体会',
    time: '2021',
    page: 25,
  },
];

const NoteProfile = ({navigation}) => {
  const renderItem = ({item}) => {
    const numberOfLines = 4;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.itemWrap}
        onPress={() => {
          navigation.navigate('NoteDetail');
          // console.log('aaa');
        }}>
        <View style={styles.itemBG}>
          <Text numberOfLines={numberOfLines} style={styles.itemContent}>
            {item.content}
          </Text>
          {/* <Text
          onPress={() => {
            console.log(item);
          }}
          style={styles.full}>
          全文
        </Text> */}
          <Divider style={styles.itemDivider} />
          <Text numberOfLines={numberOfLines}>{item.note}</Text>
        </View>
        <View style={styles.itemBottom}>
          <Text>第{item.page}页</Text>
          <Text>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon name="more-horiz" />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        style={styles.flatList}
      />
    </>
  );
};

export default NoteProfile;
