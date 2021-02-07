import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryItems from '../components/CategoryItems';
import { useSelector, useDispatch } from 'react-redux';
import { searchForMostRecentItemsByCategoryMatchingSearchCriteria, updateSearchTerm } from '../store/actions/Search';

const Landing = (props) => {
    const term = useSelector(state => {
        return state.searchTermReducer.searchTerm;
    });

    const mostRecentItemsByCategoryMatchingSearchCriteria = useSelector(state => {
      
        return state.searchMostRecentItemsByCategoryMatchingSearchCriteriaReducer.mostRecentItemsByCategoryMatchingSearchCriteria;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        searchMostRecentItemsByCategoryMatchingSearchCriteria();
    }, []);

    const searchMostRecentItemsByCategoryMatchingSearchCriteria = () => {
        const searchTerm = term === ''? '%25' : term;

        const searchCategoryId = 0;

        const numberOfMostRecentItems = 0;

        dispatch(searchForMostRecentItemsByCategoryMatchingSearchCriteria(searchTerm, searchCategoryId, numberOfMostRecentItems));
    }
    

    return (
          <View style={ styles.screen }>
            <View style={ styles.searchBar }>
                <SearchBar
                term={term}
                onTermChange={newTerm => dispatch(updateSearchTerm(newTerm)) }
                onTermSubmit={() => searchMostRecentItemsByCategoryMatchingSearchCriteria() }
                />
            </View>
            <ScrollView>
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
    screen: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
        backgroundColor: '#F5EEF8'
    },
    searchBar: {
        marginBottom: 20,
    }
});

export default Landing;