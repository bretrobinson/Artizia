import React, { useState } from 'react';
import { Button, StyleSheet, Modal, View, Image, FlatList, Text } from 'react-native';
import Input from '../components/Input';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import DefaultStyles from '../constants/defaultStyles';
import MainButton from '../components/MainButton';
import { ScrollView } from 'react-native-gesture-handler';

const AddPhotos = (props) => {
  const [currentImageUri, setCurrentImageUri] = useState('');
  const [newPhotos, setNewPhotos] = useState(props.photos);

  const addPhotoHandler = () => {
    console.log('addPhotoHandler', currentImageUri);
    const newNewPhotos = [...newPhotos];
    newNewPhotos.push({ uri: currentImageUri });
    setNewPhotos(newNewPhotos);
  };

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY,
      Permissions.CAMERA
    );
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const takePhotoHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setCurrentImageUri(image.uri);
    console.log(image.uri);
  };

  const pickPhotoFromGalleryHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setCurrentImageUri(image.uri);
    console.log(image.uri);
  };

  const doneButtonHandler = () => {
    props.setPhotos(newPhotos);
    props.setIsAddPhotoModalVisible(false);
  }

  const cancelButtonHandler = () => {
    setNewPhotos(props.photos);
    props.setIsAddPhotoModalVisible(false);
  }

  return (
    <Modal visible={props.visible} animationType='slide'>

      <View style={DefaultStyles.screenContainer}>

        {/* <View style={styles.header}> */}
        <Text style={DefaultStyles.title}>Add Photos</Text>
        <ScrollView>
          {/* </View> */}
          {/* <View> */}
          <Text style={DefaultStyles.label} >Image Uri</Text>
          {/* </View>                                 */}
          <Input style={styles.photoUriInput} value={currentImageUri} onChangeText={(imageUri) => setCurrentImageUri(imageUri)} />

          <View style={DefaultStyles.buttonContainer}>
            <MainButton title="Browse" buttonColor={Colors.defaultButtonColor} onPress={pickPhotoFromGalleryHandler} />
            <MainButton title="Take Photo" buttonColor={Colors.defaultButtonColor} onPress={takePhotoHandler} />
          </View>

          {/* <View style={ styles.buttonContainer }>
                        <View style={ styles.button }>
                            <Button title="Browse" color={ Colors.accent } onPress={ pickPhotoFromGalleryHandler } />
                        </View>
                        <View style={ styles.button }>
                            <Button title="Take Photo" color={ Colors.accent } onPress={ takePhotoHandler } />
                        </View>
                    </View> */}

          <View style={{ ...DefaultStyles.buttonContainer, justifyContent: 'flex-start' }}>
            <MainButton title="Upload" buttonColor={Colors.defaultButtonColor} onPress={addPhotoHandler} />
          </View>

          {/* <View style={styles.header}> */}
          <Text style={DefaultStyles.heading2}>Photos To Add</Text>
          {/* </View> */}

          <View style={DefaultStyles.imageFlatListContainer} >
            <FlatList
              horizontal
              data={newPhotos}
              keyExtractor={photo => photo.uri}
              renderItem={photo => (
                // <View onStartShouldSetResponder={() => true}>
                <Card>
                  <View style={{ ...DefaultStyles.imageInCardContainer, height: '100%' }}>
                    <Image style={DefaultStyles.imageInCard} source={{ uri: photo.item.uri }} />
                  </View>
                </Card>
                // </View>
              )}
            />
          </View>

          <View style={{ ...DefaultStyles.buttonContainer, justifyContent: 'space-evenly' }}>
            <MainButton title="Done" buttonColor={Colors.defaultButtonColor} onPress={doneButtonHandler} />
            <MainButton title="Cancel" buttonColor={Colors.cancelButtonColor} onPress={cancelButtonHandler} />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //     // flex: 1,
  //     padding: 20,
  //     // alignItems: 'center'
  // },
  // buttonContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     marginVertical: 10
  // },
  photoUriInput: {
    width: '100%'
  },
  // button: {
  //     width: '40%',
  //     marginHorizontal: 10,
  //     marginVertical: 10
  // }, 
  // image: {
  //     height: '100%',
  //     width: '100%'
  // },
  // card: {
  //     height: 150,
  //     width: 150,
  //     marginHorizontal: 10,
  //     marginVertical: 10
  // },
  // header: {
  //     alignItems: 'center',
  //     marginTop: 10
  //  },
  // headerTitle: {
  //     color: 'black',
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     marginBottom: 10
  // },
  // header2Title: {
  //     color: 'black',
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     marginBottom: 10
  // },
  // photoListContainer: {
  //     height: 200
  // }
});

export default AddPhotos;