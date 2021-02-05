import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import ModalDropdown from '../downloads/ModalDropDown';
import Api from '../api/craftserver'; 
import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';
import CategoryItems from '../components/CategoryItems';
import DefaultStyles from '../constants/defaultStyles';
import MainButton from '../components/MainButton';

const AdvancedSearch = props => {
    const [categories, setCategories] = useState([]);
    const [term, setTerm] = useState('');
    const [mostRecentItemsByCategoryMatchingSearchCriteria, setMostRecentItemsByCategoryMatchingSearchCriteria] = useState([]);
    const [category, setCategory] = useState('');

    const categoryRef = useRef();

    useEffect(() => {
        // Api.get('/api/category/all')
        // .then((response) => {
        //     console.log(response.data);
        //     setCategories(response.data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })

        const testCategories = ['Clothing', 'Party Supplies', 'Personal Care', 'Metal'];
        setCategories(testCategories);
        searchForMostRecentItemsByCategoryMatchingSearchCriteria('%25');
    }, []);

    const searchForMostRecentItemsByCategoryMatchingSearchCriteria = (searchTerm) => {
        // Api.get(`/api/mostRecentItemsByCategoryMatchingSearchCriteria/${searchTerm}/3/`)
        // .then(response => {
        //     console.log(response.data);
        //     setMostRecentItemsByCategoryMatchingSearchCriteria(response.data);            
        // })
        // .catch(err => {
        //     console.log(err);
        // });       

        const categoryItems = [
            {
                mostRecentItems: [
                    {
                        id: 1,
                        name: 'Socks',
                        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-crafts-1590677840.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
                        price: 1.00
                    },
                    {
                        id: 2,
                        name: 'Sweater',
                        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-crafts-1590677840.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
                        price: 2.00
                    },
                    {
                        id: 3,
                        name: 'Pants',
                        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-crafts-1590677840.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
                        price: 3.00
                    },

                ],

                category: {
                    id: 1,
                    name: 'Clothing'
                }
            }
        ];

        setMostRecentItemsByCategoryMatchingSearchCriteria(categoryItems);
    }

    const searchButtonHandler = (searchTerm) => {
        searchForMostRecentItemsByCategoryMatchingSearchCriteria(searchTerm);
    }

    return (
        <View style={ DefaultStyles.screenContainer }>
            <ScrollView>
                <View style={ DefaultStyles.searchBarOuterContainer }>
                    <SearchBar
                        term={term}
                        onTermChange={newTerm => setTerm(newTerm) }
                        // onTermChange={newTerm => dispatch(updateSearchTerm(newTerm)) }
                        // onTermSubmit={() => searchForMostRecentItemsByCategoryMatchingSearchTerm(dispatch, term === ''? '%25':term) }
                        // onTermSubmit={() => searchForMostRecentItemsByCategoryMatchingSearchCriteria() }                    
                    />
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={DefaultStyles.label}>
                        Category
                    </Text>

                    <View style={DefaultStyles.modal}>
                        <ModalDropdown
                            ref={categoryRef}
                            style={DefaultStyles.modalField}
                            textStyle={DefaultStyles.modalFieldText}
                            options={categories}
                            defaultValue={'Select category'}
                            dropdownTextStyle={DefaultStyles.modalDropdownText}
                            dropdownTextHighlightStyle={DefaultStyles.modalDropdownHighlight}
                            onSelect={(idx, value) => setCategory(value)}
                        />
                    </View>
                </View>

                <View style={DefaultStyles.buttonContainer}>
                        <MainButton title="Search" buttonColor={Colors.defaultButtonColor} onPress={searchButtonHandler.bind(this, term === ''? '%25':term)}/>
                </View>

                <Text style={DefaultStyles.title}>
                    Search Results
                </Text>

                {
                    mostRecentItemsByCategoryMatchingSearchCriteria.map((category, i) => {
                        return (
                            <CategoryItems 
                                key={category.category.name } 
                                category={category} />
                        );
                    })
                }
            </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    // screen: {
    //     flex: 1,
    //     paddingTop: 20,
    //     paddingLeft: 20,
    //     paddingBottom: 20,
    //     paddingRight: 10,
    //     // alignItems: 'center',
    //     // justifyContent: 'flex-start'
    //     backgroundColor: '#F5EEF8'
    // },
    // searchBar: {
    //     marginBottom: 20,
    // },
    // modalFieldTextStyle: {
    //     backgroundColor: Colors.primary,
    //     color: Colors.buttonText,
    //     fontSize: 18,
    //     justifyContent: 'center'
    // },
    // modalDropdownText: {
    //     backgroundColor: Colors.secondary,
    //     color: Colors.dropdownText,
    //     fontSize: 18
    // },
    // modalDropdownHighlight: {
    //     backgroundColor: Colors.primary,
    //     color: Colors.buttonText
    // },
    categoryContainer: {
        // height: 90,
        width: '100%',
        // flexDirection: 'row',
        justifyContent: 'space-around',
        // marginVertical: 10,
        // alignItems: 'center',
    },
    // label: {
    //     fontSize: 18,
    //     marginBottom: 5
    // },
    // modal: {
    //     height: 50,
    //     marginBottom: 10
    // },
    // heading2: {
    //     fontSize: 20,
    //     marginTop: 10,
    //     marginBottom: 10,
    //     fontWeight: 'bold',
    // }
    // buttonContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     marginVertical: 10
    // },
    // button: {
    //     width: '60%',
    // },    
});

export default AdvancedSearch;