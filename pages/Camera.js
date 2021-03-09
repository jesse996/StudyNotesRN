import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Image, Overlay} from 'react-native-elements';

const {width, height, scale} = Dimensions.get('window');

const Camera = (props) => {
  const camera = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState('');
  // console.log(width);
  // console.log(height);
  // console.log(scale);

  const takePicture = async () => {
    if (camera) {
      try {
        const options = {quality: 0.5, base64: false, pauseAfterCapture: true};
        const data = await camera.current.takePictureAsync(options);
        console.log(data);
        setImg(data.uri);
        setIsVisible(true);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        // flashMode={RNCamera.Constants.FlashMode.on}
        useNativeZoom={true}
        // notAuthorizedView={<Text style={{backgroundColor: '#fff'}}>ad</Text>}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        // androidRecordAudioPermissionOptions={{
        //   title: 'Permission to use audio recording',
        //   message: 'We need your permission to use your audio',
        //   buttonPositive: 'Ok',
        //   buttonNegative: 'Cancel',
        // }}
        // onGoogleVisionBarcodesDetected={({barcodes}) => {
        //   // console.log(JSON.stringify(barcodes));
        // }}
        // googleVisionBarcodeType={
        //   RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.QR_CODE
        // }
        // googleVisionBarcodeMode={
        //   RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode
        //     .ALTERNATE
        // }
        // detectedImageInEvent={true}
        // barCodeTypes={RNCamera.Constants.BarCodeType.qr}

        // 只能识别拉丁字符
        // onTextRecognized={({textBlocks}) => {
        //   console.log(JSON.stringify(textBlocks.map((i) => i.value)));
        // }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          {/* <Text style={{fontSize: 14}}> SNAP </Text> */}
          <TouchableOpacity onPress={takePicture} style={styles.captureSmall} />
        </TouchableOpacity>
      </View>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}>
        <Image source={{uri: img}} style={{width, height}} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    // flex: 0,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    // padding: 15,
    // paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureSmall: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default Camera;
