import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/Navigation/DrawerNavigator";
import { navigationRef } from './RootNavigation';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reviewSellerReducer from './store/reducers/ReviewSeller';


const rootReducer = combineReducers({
  reviewseller: reviewSellerReducer

});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
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
