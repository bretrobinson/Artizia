import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/Navigation/DrawerNavigator";
import { navigationRef } from './RootNavigation';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reviewSellerReducer } from './store/reducers/ReviewSeller';
import { searchTermReducer, searchMostRecentItemsByCategoryMatchingSearchTermReducer } from './store/reducers/Landing';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
   reviewSellerReducer,
  searchTermReducer, searchMostRecentItemsByCategoryMatchingSearchTermReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
        >
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
  );
}

// const App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }
// export default App;

// export default function App() {
//   return (
//     <View style={ styles.screens }>
//       <Landing />
//       <Signup />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screens: {
//     flex: 1
//   }

// });
