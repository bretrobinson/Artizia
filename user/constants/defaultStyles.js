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
    fontSize: 20
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
    marginBottom: 5,
    color: 'black',
    fontWeight: 'normal'
  },
  heading2: {
      fontSize: 22,
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    color: Colors.error,
    marginBottom: 10
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
    marginRight: 5,
    // backgroundColor: Colors.accent
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 10
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
    backgroundColor: Colors.accent2,
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
  input: {
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    // fontSize: 18,
    backgroundColor: Colors.accent2,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputText: {
    fontSize: 18,
  },
  multiLineInput: {
    height: 100,
    textAlignVertical: 'top'
  },
  imageFlatListContainer: {
    height: 220
  },  
  card: {
    height: 200,
    width: 225,
    marginHorizontal: 10,
    marginVertical: 10,

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: Colors.primary    
  },
  touchableCard: {
    borderRadius: 10,
    overflow: 'hidden'
  },   
  imageInCardContainer: {
    width: '100%',
    height: '60%',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageInCard: {
    height: '100%',
    width: '100%'
  },
  detailsInCardContainer: {
    alignItems: 'center',
    height: '40%',
    padding: 5
  },
  nameInDetailsOfCard: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    // color: Colors.accent,
    marginVertical: 2
  },
  priceInDetailsOfCard: {
    // fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
  myItemCard: {
    marginTop:30,
    height: 320,
    width:330,
    // marginLeft:33
   
  }, 
  radioButtonGroupContainer: {
    margin: 10
  },
  radioButtonItemContainer: {
    marginHorizontal: 40
  },
  radioButtonItemLabel: {
    fontSize: 16
  },
  addItemIcon: {
    width:50,
    marginLeft:300
  },
  });
