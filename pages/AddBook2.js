import React, {useRef, useState} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

const AddBook2 = ({navigation}) => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishing, setPublishing] = useState('');
  const [publicDate, setPublicDate] = useState('');
  const [image, setImage] = useState();

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
            // navigation.navigate('Camera');
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
              .then((image) => {
                // console.log(image);
                setImage(image);
              })
              .catch((e) => {
                console.log('eroor:');
                console.log(e);
              });
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
        // type="outline"
      />

      <Button
        title="open picker"
        onPress={() => {
          // ImagePicker.openPicker({
          //   width: 300,
          //   height: 400,
          //   cropping: true,
          // }).then((image) => {
          //   console.log(image);
          // });
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          })
            .then((image) => {
              console.log(image);
              setImgPath(image.path);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      />
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

export default AddBook2;
