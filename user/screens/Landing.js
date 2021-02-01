import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CategoryItems from '../components/CategoryItems';
import { useSelector, useDispatch } from 'react-redux';
import { searchForMostRecentItemsByCategoryMatchingSearchTerm, updateSearchTerm } from '../store/actions/Landing';

const Landing = (props) => {
    const term = useSelector(state => {
        return state.searchTermReducer.searchTerm;
    });

    const mostRecentItemsByCategoryMatchingSearchTerm = useSelector(state => {
        return state.searchMostRecentItemsByCategoryMatchingSearchTermReducer.mostRecentItemsByCategoryMatchingSearchTerm;
    });

    const isPending = useSelector(state => {
        return state.searchMostRecentItemsByCategoryMatchingSearchTermReducer.isPending;
    });

    const error = useSelector(state => {
        return state.searchMostRecentItemsByCategoryMatchingSearchTermReducer.error;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        searchForMostRecentItemsByCategoryMatchingSearchTerm(dispatch, '%25');
    }, []);
 
    return (
          <View style={ styles.screen }>
            <View style={ styles.searchBar }>
                <SearchBar
                term={term}
                onTermChange={newTerm => dispatch(updateSearchTerm(newTerm)) }
                onTermSubmit={() => searchForMostRecentItemsByCategoryMatchingSearchTerm(dispatch, term === ''? '%25':term) }
                />
            </View>
            <ScrollView>
                {
                    mostRecentItemsByCategoryMatchingSearchTerm.map((category, i) => {
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