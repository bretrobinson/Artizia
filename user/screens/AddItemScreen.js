import React, { useState, useRef } from 'react';
import { View,
         Text,
         StyleSheet,
         TextInput,
         Button,
         Keyboard,
         TouchableOpacity,
         TouchableWithoutFeedback,
         Image,
         Alert,
         FlatList,
         ScrollView 
        } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalDropdown from '../downloads/ModalDropDown';

import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/defaultStyles'
import AddPhotos from './AddPhotos';
import Card from '../components/Card';
// import { TouchableNativeFeedback, 
//         TouchableHighlight, 
//         TouchableOpacity, 
//         TouchableWithoutFeedback } from 'react-native-gesture-handler';  
import Api from '../api/craftserver';       

const Categories = [];
let categoryRows = [];

// get categories from datbase
// the base URL should come from env var
let serverURL = "http://localhost:4000/category"
fetch(serverURL)
.then((resp) => resp.json())
.then(data => {
  categoryRows = data
  console.log('response data in add item: ', categoryRows)
  categoryRows.forEach((row) => console.log('category id: ', row.id, ' category name: ', row.name))
  categoryRows.forEach((row) => {
    Categories.push(row.name)
  })
  console.log('Categories inside: ', Categories)
})
.catch(error => {
  console.log(error)
})

//const Categories = [];
  // 'Crochet', 'Sewing', 'Painting', 'Woodwork', 'Photography', 'Metalwork', 'Bath and Beauty', 'Pets', 'Office'];

let SubCategories = [];
// this should eventually come from database
const subCats = [
  {
    "cat": "Crochet",
    "subcats": ['Toques', 'Gloves and Mittens', 'Scarves', 'Shawls']
  },
  {
    "cat": "Sewing",
    "subcats": ['Quilts', 'Towels', 'Skirts']
  },
  {
    "cat": "Painting",
    "subcats": ['Landscape', 'Abstract', 'Impressionism', 'Portrait']
  },
  {
    "cat": "Woodwork",
    "subcats": ['Bowls', 'Tables', 'Carving', 'Kitchen']
  }
];

let subCatArr = [];

for (let i = 0; i < subCats.length; i++) {
  subCatArr = [...subCats[i].subcats];
  //console.log(subCats[i].subcats)
  //console.log('subCat: ', i, " ", subCatArr)
}

let defaultSubcatTitle = 'Select subcat for...'

const AddItemScreen = props => {

  const [shortDesc, setShortDesc] = useState();
  const [longDesc, setLongDesc] = useState();
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState([]);
  const [addPhoto, setAddPhoto] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isAddPhotoModalVisible, setIsAddPhotoModalVisible] = useState(false);  

  const shortD = useRef();
  const longD = useRef();
  const sellPrice = useRef();
  const itemCategory = useRef();
  const itemSubcategory = useRef();

  const priceInputHandler = inputText => {
    // this prevents an error when deleting all entered numbers
    if (inputText) {
      // replace any non-number, or decimal point, with an empty string
      let newprice = inputText.replace(/[^0-9\.]/g, '');
      // limit input to 2 decimal places
      let with2Decimals = newprice.match(/^-?\d+(?:\.\d{0,2})?/)[0]
      // only numbers, decimal point and two decimal places
      setPrice(inputText.replace(/[^0-9\.]/g, '').match(/^-?\d+(?:\.\d{0,2})?/)[0])
    } else {
      // needed this to be able to delete last digit
      setPrice(inputText)
    }
  };

  const categorySelectHandler = (idx, value) => {
    //console.log('idx: ', idx, ' value: ', value);
    setCategory(value);
    SubCategories = subCats[idx].subcats;
    defaultSubcatTitle = subCats[idx].cat;
    //setSubcategory(SubCategories);
    setSubcategory(defaultSubcatTitle);
    //itemSubcategory.select(0)
  };

  const subcategorySelectHandler = (idx, value) => {
    //console.log('subcat idx: ', idx, ' value: ', value);
    setSubcategory(value);
  };

  const addPhotoHandler = props => {
    console.log('add photo button pressed');
    setIsAddPhotoModalVisible(true);
  }

  const saveButtonHandler = props => {
    //console.log('saveButton: ', shortDesc, longDesc, price, category, subcategory)
    if (!shortDesc) {
      Alert.alert(
        "Must enter a short description", "",
        [{ text: "OK", onPress: () => {shortD.current.focus()}}]
      );
    } else if (!longDesc) {
        Alert.alert(
          "Must enter a long description", "",
          [{ text: "OK", onPress: () => {longD.current.focus()}}]
        );
    } else if (!price) {
        Alert.alert(
          "Must enter a price", "",
          [{ text: "OK", onPress: () => {sellPrice.current.focus()}}]
        );
    } else if (!category) {
      Alert.alert( "Must select a category", "", [] );
    } else if (!subcategory || subcategory === category) {
      Alert.alert( "Must select a subcategory", "", [] );
    }
    console.log("all input data looks ok");
    //console.log('userid :', req.user.idusers)

    // save item data in object
    let currentDate = new Date();
    console.log('current date: ', currentDate)

    const itemData = {
      name: shortDesc,
      categoryId: 7,
      createdDate: currentDate,
      drop: longDesc,
      price: price,
      userId: 0,
      desc: longDesc,
    }

    console.log('itemData: ', itemData)

    // save item data
    const itemHdr = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    console.log('saving item data to db')
    Api.post('/item/create', itemData, itemHdr)
      .then((response) => {
        console.log('item post response: ', response);
      })
      .catch((err) => {
        console.log('Error from item create api.post: ', err)
      });

    photos.forEach((photo, i) => {
      const photoData = new FormData();

      photoData.append('fileData', {
        uri: photo.uri,
        type: 'image/jpeg',
        name: `${i}.jpg`
      });

      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
      };

      Api.post('/api/uploadImage/1', photoData, config)
      .then((response) => {
        // console.log(response);
      });

    });

  }

  return (
    // get rid of keyboard on iOS when click outside
    // of input area, works for Android as well but
    // Android keyboard can be dismissed with checkmark key
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >

    <View style={styles.screen}>
      <View>
        <Text style={DefaultStyles.bodyText} >Short Description</Text>
      </View>
      <TextInput
        ref={shortD}
        style={styles.textinput}
        placeholder=" Item short description"
        placeholderTextColor={Colors.placeholderText}
        onChangeText={text => setShortDesc(text)}
        value={shortDesc}
      />
      <View>
        <Text style={DefaultStyles.bodyText} >Detailed Description</Text>
      </View>
      <TextInput
        ref={longD}
          style={styles.multilineInput}
          maxLength={256}
          multiline={true}
          numberOfLines={10}
          placeholder = " Item detailed description"
          placeholderTextColor={Colors.placeholderText}
          onChangeText={text => setLongDesc(text)}
          value={longDesc}
      />
      <View>
        <Text style={DefaultStyles.bodyText} >Price</Text>
      </View>
      <View style={styles.rowContainer}>
        <TextInput
          ref={sellPrice}
          style={[styles.textinput, styles.priceInput]}
          placeholder=" Price"
          placeholderTextColor={Colors.placeholderText}
          keyboardType='numeric'
          onChangeText={text => priceInputHandler(text)}
          value={price}
        />
      </View>
      <View>
        <Text style={DefaultStyles.bodyText} >Category and Sub-category</Text>
      </View>
      <View style={[styles.categoryContainer]}>
        <ModalDropdown
          ref={itemCategory}
          style={styles.dropcat}
          textStyle={styles.textStyle}
          options={Categories}
          defaultValue={'Select category'}
          dropdownTextStyle={styles.dropdownText}
          dropdownTextHighlightStyle={styles.dropdownHighlight}
          onSelect={(idx, value) => categorySelectHandler(idx, value)}
        />
        <ModalDropdown
          ref={itemSubcategory}
          style={styles.dropcat}
          textStyle={styles.textStyle}
          options={SubCategories}
          defaultValue={defaultSubcatTitle}
          dropdownTextStyle={styles.dropdownText}
          dropdownTextStyle={styles.dropdownText}
          dropdownTextHighlightStyle={styles.dropdownHighlight}
          onSelect={(idx, value) => subcategorySelectHandler(idx, value)}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={DefaultStyles.bodyText} >Photos  </Text>
        <TouchableOpacity activeOpacity={0.4} onPress={addPhotoHandler}>
          <Ionicons name="add-circle" size={24} color="black" />
        </TouchableOpacity>
          <AddPhotos 
                  visible={ isAddPhotoModalVisible } 
                  photos = { photos } 
                  setPhotos = { setPhotos } 
                  setIsAddPhotoModalVisible = { setIsAddPhotoModalVisible } 
              />        
      </View>

      {photos.length === 0?
        (
          <View style={styles.photoContainer}>
            <Image source={require('../assets/placeholder.png')} />
            <Image source={require('../assets/placeholder.png')} />
            <Image source={require('../assets/placeholder.png')} />
          </View>
        ):
        (
            <View style = {styles.photoListContainer}>
                <FlatList
                  horizontal
                  data={photos}
                  keyExtractor={photo=> photo.uri}
                  renderItem={photo => (
                      <View onStartShouldSetResponder={() => true}>
                        <Card style={ styles.card }>
                          <Image style={styles.image} source={{ uri: photo.item.uri }}/>
                        </Card>
                      </View>)
                }
                />
            </View>

        )
      }
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSave}>
          <MainButton title="Save" buttonColor="purple" onPress={saveButtonHandler}/>
        </View>
        
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start' // default
  },
  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8
  },
  textinput: {
    height: 30,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    textAlign: 'left'
  },
  multilineInput: {
    height: 80,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  },
  priceInput: {
    width: '40%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  categoryContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  dropcat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    fontSize: 15,
    backgroundColor: Colors.primary,
    color: Colors.buttonText,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  dropdownText: {
    backgroundColor: Colors.secondary,
    color: Colors.dropdownText,
    fontSize: 15
  },
  dropdownHighlight: {
    backgroundColor: Colors.primary,
    color: Colors.buttonText
  },
  textStyle: {
    backgroundColor: Colors.primary,
    color: Colors.buttonText,
    fontSize: 15,
    justifyContent: 'center'
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  photoListContainer: {
    height: 130
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  buttonSave: {
    width: '60%',
  },
  buttonSold: {
    color: 'red'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  card: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    marginVertical: 10
},
  image: {
    height: '100%',
    width: '100%'
  }  
});

export default AddItemScreen;