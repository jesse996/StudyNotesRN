import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';
import {View} from 'react-native';
import {Divider, Icon, Image, Text} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableHighlight, TouchableOpacity} from 'react-native';

const BookItem = (props) => {
  return (
    <View {...props}>
      <Image
        source={{
          uri: props.url,
        }}
        style={{
          width: 110,
          height: 150,
        }}
        containerStyle={{
          borderRadius: 10,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

const BookShelf = ({url, navigation}) => {
  const renderBooks = ({item, index}) => {
    if (index === 0) {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            console.log('go search');
            navigation.navigate('AddBook');
          }}>
          <Icon name="add" size={60} />
        </TouchableOpacity>
      );
    }
    return <BookItem url={item.url} style={styles.item} />;
  };
  const data = [...Array(15).keys()].map((i) => ({
    id: i,
    url: 'https://img9.doubanio.com/view/photo/l/public/p2615115166.webp',
  }));
  return (
    <>
      <View style={styles.head}>
        <Text h4 style={styles.title}>
          我的书架
        </Text>
        <Text style={styles.edit}>编辑</Text>
      </View>
      <View style={styles.search}>
        <Icon name="search" color="gray" />
        <Text
          style={styles.hint}
          onPress={() => {
            navigation.navigate('Search');
            // navigation.setOptions({
            //   tabBarVisible: false,
            // });
            console.log('press');
          }}>
          搜索书本或笔记内容
        </Text>
      </View>
      {/* 书架内容 */}
      <FlatList
        data={data}
        renderItem={renderBooks}
        keyExtractor={(item) => '' + item.id}
        numColumns={3}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 220,
    // height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: 'gray',
  },
  edit: {
    position: 'absolute',
    right: 15,
    fontSize: 20,
    color: 'gray',
  },
  search: {
    backgroundColor: '#D0D3D4',
    height: 30,
    margin: 20,
    flexDirection: 'row',
    borderRadius: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  hint: {
    fontSize: 18,
    flex: 1,
    color: 'gray',
  },
  item: {
    width: 110,
    height: 150,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
export default BookShelf;
