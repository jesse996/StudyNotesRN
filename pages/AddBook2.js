import React, {useRef, useState, memo} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {
  BottomSheet,
  Button,
  Icon,
  Image,
  ListItem,
} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import {addBook} from '../store/testSlice';
import {Pressable} from 'react-native';

const AddBook2 = ({navigation}) => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishing, setPublishing] = useState('');
  const [publicDate, setPublicDate] = useState('');
  const [image, setImage] = useState();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook({image, bookName, author, publishing, publicDate}));
    Toast.show({
      type: 'success',
      text1: '成功',
      text2: '添加成功',
      position: 'bottom',
    });
    navigation.goBack();
  };
  const list = [
    {
      title: '拍照',
      containerStyle: {},
      contentStyle: {
        alignItems: 'center',
      },
      titleStyle: {},
      onPress: () => {
        ImagePicker.openCamera({
          width: 110,
          height: 150,
          cropping: true,
          includeBase64: true,
          writeTempFile: false,
          freeStyleCropEnabled: true,
          // cropperCircleOverlay: true,
          showCropGuidelines: false,
        })
          .then((img) => {
            // console.log(image);
            setImage(img);
          })
          .catch((e) => {
            console.log('eroor:');
            console.log(e);
          })
          .finally(() => {
            setIsBottomSheetVisible(false);
          });
      },
    },
    {
      title: '从相册选择',
      contentStyle: {
        alignItems: 'center',
      },
      onPress: () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          includeBase64: true,
          writeTempFile: false,
          freeStyleCropEnabled: true,
          // cropperCircleOverlay: true,
          showCropGuidelines: false,
        })
          .then((img) => {
            setImage(img);
            // console.log(image);
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            setIsBottomSheetVisible(false);
          });
      },
    },
    {
      title: '取消',
      containerStyle: {backgroundColor: 'red'},
      contentStyle: {
        alignItems: 'center',
      },
      titleStyle: {color: 'white'},
      onPress: () => setIsBottomSheetVisible(false),
    },
  ];

  return (
    <>
      <View style={styles.head}>
        <Icon name="arrow-back-ios" containerStyle={styles.icon} />
        <Text style={styles.title}>自定义创建</Text>
      </View>
      <View style={styles.wrap}>
        {/* <Image style={{width: 110, height: 150}} /> */}
        <TouchableOpacity
          style={styles.iconWrap}
          onPress={() => {
            setIsBottomSheetVisible(true);
            // navigation.navigate('Camera');
            // ImagePicker.openCamera({
            //   width: 110,
            //   height: 150,
            //   cropping: true,
            //   includeBase64: true,
            //   writeTempFile: false,
            //   freeStyleCropEnabled: true,
            //   // cropperCircleOverlay: true,
            //   showCropGuidelines: false,
            // })
            //   .then((image) => {
            //     // console.log(image);
            //     setImage(image);
            //   })
            //   .catch((e) => {
            //     console.log('eroor:');
            //     console.log(e);
            //   });
          }}>
          {image ? (
            <Image
              source={{uri: `data:${image.mime};base64,${image.data}`}}
              style={{width: 110, height: 150}}
            />
          ) : (
            <Icon name="camera-alt" color="gray" />
          )}
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="书籍名称"
            value={bookName}
            onChangeText={(text) => {
              setBookName(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="作者"
            value={author}
            onChangeText={(text) => {
              setAuthor(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="出版方"
            value={publishing}
            onChangeText={(text) => {
              setPublishing(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="出版日期"
            value={publicDate}
            onChangeText={(text) => {
              setPublicDate(text);
            }}
          />
        </View>
      </View>
      <Button
        title="确定"
        buttonStyle={{marginTop: 30, color: 'black'}}
        style={{backgroundColor: '#fff'}}
        onPress={handleAddBook}
      />

      <BottomSheet
        isVisible={isBottomSheetVisible}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider={true}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content style={l.contentStyle}>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 20,
    // width: 25,
    // height: 25,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  iconWrap: {
    width: 110,
    height: 150,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  inputWrap: {
    // height: 160,
    overflow: 'hidden',
    marginLeft: 20,
  },
  input: {
    width: 200,
    height: 38,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
});

export default memo(AddBook2);
