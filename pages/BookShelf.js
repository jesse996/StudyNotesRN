import React, {memo, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';
import {View} from 'react-native';
import {Divider, Icon, Image, Text} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableHighlight, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import {connect, useSelector} from 'react-redux';
import {Pressable} from 'react-native';

const BookItem = (props) => {
  const {image} = props;
  return (
    <View {...props}>
      <Image
        source={{
          uri: `data:${image?.mime};base64,${image?.data}`,
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
  const books = useSelector((state) => state.main.allBooks);
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
    return <BookItem image={item.image} style={styles.item} />;
  };
  // let data = [...Array(15).keys()].map((i) => ({
  //   // id: i,
  //   // url: 'https://img9.doubanio.com/view/photo/l/public/p2615115166.webp',
  //   image: {},
  //   bookName: 'test',
  //   author: '',
  //   publishing: '',
  //   publicDate: '',
  // }));

  // data = [...data, ...books];
  const data = books;

  // const isEditing = useRef(false);
  const [isEditing, setIsEditing] = useState(false);
  const toggleTarBarVisible = () => {
    // isEditing.current = !isEditing.current;
    setIsEditing((e) => !e);
    navigation.setOptions({
      tabBarVisible: isEditing,
    });
  };

  return (
    <>
      <View style={styles.head}>
        <Text h4 style={styles.title}>
          我的书架
        </Text>
        <Text style={styles.edit} onPress={toggleTarBarVisible}>
          {isEditing ? '取消' : '编辑'}
        </Text>
      </View>
      <Pressable
        style={styles.search}
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <Icon name="search" color="gray" />
        <Text style={styles.hint}>搜索书本或笔记内容</Text>
      </Pressable>
      {/* 书架内容 */}
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderBooks}
          keyExtractor={(item, index) => index}
          numColumns={3}
          contentContainerStyle={{justifyContent: 'center'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 110,
    // height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 50,
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

export default memo(BookShelf);
