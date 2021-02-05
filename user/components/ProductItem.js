import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import Colors from '../constants/Colors';
import {navigate} from '../RootNavigation'
import Card from './Card';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        {/* <TouchableCmp onPress={props.onSelect} useForeground> */}
        <TouchableCmp onPress={()=>navigate('ItemDetail', {itemId: props.itemId, uri: props.image, price:props.price, itemName: props.name } )} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>{props.name}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            {/* <View style={styles.actions}>
              {props.children}
            </View> */}
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 200,
    margin: 10,
    width: 175,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '40%',
    padding: 5
  },
  name: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    // color: Colors.accent,
    marginVertical: 2
  },
  price: {
    // fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '23%',
//     paddingHorizontal: 20
//   }
});

export default ProductItem;