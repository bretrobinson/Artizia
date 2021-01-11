import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductItem from '../components/ProductItem';
import CategoryItems from '../components/CategoryItems';

const Landing = () => {
    const [term, setTerm] = useState('');
    const [mostRecentItemsForEachCategoryMatchingSearchFilter, setMostRecentItemsForEachCategoryMatchingSearchFilter] = useState([{category: {id: '', name: ''}, mostRecentItems: []}]);

    useEffect(() => {
        searchForMostRecentItemsInEachCategoryMatchingSearchFilter();
    }, []);

    const searchForMostRecentItemsInEachCategoryMatchingSearchFilter = () => {
        // Call endpoint GET /categories to get list of categories
        // Loop through each category:
        //      Get 3 most recent items in category by calling endpoint GET /mostrecentitemsforcategory. Need to pass in number of most recent items to retrieve, category, and search filter in the body.
        //      Put results in mostRecentItemsForEachCategoryMatchingSearchFilter

        const results = [
            {
                category: {
                    id: 1,
                    name: 'Category 1'
                },

                mostRecentItems: [
                    {
                        id: 1,
                        name: 'Item 1',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 1
                    },
                    {
                        id: 2,
                        name: 'Item 2',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 2                        
                    },
                    {
                        id: 3,
                        name: 'Item 3',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 3
                    }
                ]
            },
            {
                category: {
                    id: 2,
                    name: 'Category 2'
                },

                mostRecentItems: [
                    {
                        id: 4,
                        name: 'Item 4',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 4
                    },
                    {
                        id: 5,
                        name: 'Item 5',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 5
                    },
                    {
                        id: 6,
                        name: 'Item 6',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 6
                    }
                ]
            },
            {
                category: {
                    id: 3,
                    name: 'Category 3'
                },

                mostRecentItems: [
                    {
                        id: 7,
                        name: 'Item 7',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 7
                    },
                    {
                        id: 8,
                        name: 'Item 8',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 8
                    },
                    {
                        id: 9,
                        name: 'Item 9',
                        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',                        
                        price: 9
                    }
                ]
            }            
        ]

        setMostRecentItemsForEachCategoryMatchingSearchFilter(results);
    }

    return (
          <View style={ styles.screen }>
            <View style={ styles.searchBar }>
                <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchForMostRecentItemsInEachCategoryMatchingSearchFilter() }
                />
            </View>
            <ScrollView>
                {
                    mostRecentItemsForEachCategoryMatchingSearchFilter.map((category, i) => {
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
    screen: {
        // flex: 1,
        padding: 20,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
    },
    searchBar: {
        marginBottom: 20
    }
});

export default Landing;