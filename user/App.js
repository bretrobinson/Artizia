import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/Navigation/DrawerNavigator";
import { navigationRef } from './RootNavigation';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reviewSellerReducer } from './store/reducers/ReviewSeller';
import {deletemyItemReducer } from './store/reducers/DeleteMyItem';
import {userItemsReducer} from './store/reducers/DisplayMyItem';
import { searchTermReducer, searchMostRecentItemsByCategoryMatchingSearchTermReducer, searchMostRecentItemsByCategoryMatchingSearchCriteriaReducer } from './store/reducers/Search';
import thunkMiddleware from 'redux-thunk';
import { Provider as AnnouncementsProvider } from './context/AnnouncementContext';
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return { shouldShowAlert: true };
  },
});
const rootReducer = combineReducers({
  //deletemyItemReducer,
   reviewSellerReducer,
   userItemsReducer,
  searchTermReducer, 
  searchMostRecentItemsByCategoryMatchingSearchTermReducer,
  searchMostRecentItemsByCategoryMatchingSearchCriteriaReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default function App() {
  return (
    <AnnouncementsProvider>
    <AuthProvider>
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
        >
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    </AuthProvider>
    </AnnouncementsProvider>
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
