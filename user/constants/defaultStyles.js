import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 10,
    // alignItems: 'center',
    // justifyContent: 'flex-start'
    backgroundColor: Colors.accent
  },
  bodyText: {
    //fontFamily: 'open-sans',
    color: 'black',
    fontSize: 18
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  },
  heading2: {
      fontSize: 22,
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold',
  },
  modal: {
    height: 50,
    width: 200,
    marginBottom: 10
  },
  modalField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 5,
    fontSize: 18,
    backgroundColor: Colors.primary,
    color: Colors.buttonText,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  modalFieldText: {
    backgroundColor: Colors.primary,
    color: Colors.buttonText,
    fontSize: 18,
    justifyContent: 'center'
  },
  modalDropdownText: {
    backgroundColor: Colors.secondary,
    color: Colors.dropdownText,
    fontSize: 18
  },
  modalDropdownHighlight: {
      backgroundColor: Colors.primary,
      color: Colors.buttonText
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
    marginRight: 20
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.buttonText,
    //fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center'
  },
  searchBarOuterContainer: {
    marginBottom: 20
  },
  searchBarContainer: {
    marginTop: 10,
    marginBottom: 20,
    // backgroundColor: '#F0EEEE',
    borderColor: Colors.primary,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: 'row'
  },
  searchBarText: {
    flex: 1,
    fontSize: 18
  },
  searchBarIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  searchCategoryContainer: {
    marginVertical: 10
},  
});
