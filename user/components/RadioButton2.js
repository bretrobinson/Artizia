import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioButton2 = ({value, setValue}) => {
//   const [value, setValue] = React.useState('Email Transfer');

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <Text style={styles.text} >Payment Method</Text>
      <View style={styles.container}>
      <RadioButton.Item label="Email Transfer" value="Email Transfer" />
      <RadioButton.Item label="Pay Pal" value="PayPal" />
      </View>
    </RadioButton.Group>
  );
}
const styles = StyleSheet.create({
  container : {
    marginHorizontal: 60
  },
  text: {
    fontSize:16,
    marginLeft: 10,
    fontWeight:'bold',
    color: 'rgb(150,150,150)'
  }
})
export default RadioButton2;