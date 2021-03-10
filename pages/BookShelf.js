import React, {memo, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Divider, Icon, Text, Button, Image} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableHighlight, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Pressable} from 'react-native';
import {deleteBooks} from '../store/testSlice';

const BookItem = (props) => {
  const {image, selected, bookName} = props;
  console.log('bookName:', bookName, ';');
  const source = image
    ? {uri: `data:${image?.mime};base64,${image?.data}`}
    : require('../assets/newBook.png');
  const imgStyle = image ? {width: 110, height: 150} : {width: 80, height: 120};
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Pressable {...props}>
        <Image
          source={source}
          style={imgStyle}
          containerStyle={{
            borderRadius: 10,
          }}
          PlaceholderContent={<ActivityIndicator />}>
          {selected ? (
            // 这个是选中端阴影层
            <View
              style={{
                backgroundColor: 'rgba(100, 100, 100, .6)',
                flex: 1,
              }}
            />
          ) : null}
        </Image>
        {selected ? (
          // 这个是选中左上角的图标
          <Icon
            name="check-circle"
            // color="#fff"
            color="#2b78fe"
            containerStyle={{
              position: 'absolute',
              left: 2,
              top: 2,
              backgroundColor: '#fff',
              borderRadius: 50,
            }}
          />
        ) : null}
      </Pressable>
      <Text>{bookName.trim() ? bookName.trim() : '未命名'}</Text>
    </View>
  );
};

const BookShelf = ({url, navigation}) => {
  let books = useSelector((state) => state.main.allBooks);
  if (!books) {
    books = [];
  }

  const dispatch = useDispatch();

  const [selectBooksIndex, setSelectBooksIndex] = useState(
    Array(books?.length).fill(false),
  );

  const handlePressBook = (index) => {
    if (isEditing) {
      selectBooksIndex[index] = !selectBooksIndex[index];
      setSelectBooksIndex([...selectBooksIndex]);
    } else {
    }
  };

  const handleDelete = () => {
    dispatch(deleteBooks(selectBooksIndex));
    toggleTarBarVisible();
  };
  const data = books;

  const [isEditing, setIsEditing] = useState(false);
  const toggleTarBarVisible = () => {
    setIsEditing((e) => !e);
    setSelectBooksIndex(Array(books?.length).fill(false));
    navigation.setOptions({
      tabBarVisible: isEditing,
    });
  };

  const renderBooks = ({item, index}) => {
    if (index === 0) {
      const disbale = isEditing;
      return (
        <TouchableOpacity
          style={styles.item}
          disabled={disbale}
          onPress={() => {
            console.log('go search');
            navigation.navigate('AddBook');
          }}>
          <Icon name="add" size={60} />
        </TouchableOpacity>
      );
    }
    return (
      <BookItem
        image={item.image}
        style={styles.item}
        bookName={item.bookName}
        selected={selectBooksIndex[index]}
        onPress={() => handlePressBook(index)}
      />
    );
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
      {/* <View style={styles.container}> */}
      <FlatList
        data={data}
        renderItem={renderBooks}
        keyExtractor={(item, index) => index}
        numColumns={3}
        contentContainerStyle={{
          // width: '50%',
          marginHorizontal: 15,
        }}
      />
      {/* </View> */}
      {/* 编辑时最下面的删除按钮 */}
      {isEditing ? (
        <Pressable>
          <Button
            title="删除"
            buttonStyle={{backgroundColor: 'red'}}
            onPress={handleDelete}
          />
        </Pressable>
      ) : null}
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
    // position: 'relative',
  },
});

export default memo(BookShelf);
