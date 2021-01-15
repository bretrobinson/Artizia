import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioButton2 = ({value, setValue}) => {
//   const [value, setValue] = React.useState('Email Transfer');

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <Text>Payment Method</Text>
      <View style={styles.container}>
      <RadioButton.Item label="Email Transfer" value="Email Transfer" />
      <RadioButton.Item label="Pay Pal" value="payPal" />
      </View>
    </RadioButton.Group>
  );S
}
const styles = StyleSheet.create({
  container : {
    marginHorizontal: 60
  }})
export default RadioButton2;