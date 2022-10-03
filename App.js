import {StyleSheet,Text,View} from "react-native"
import React from "react"
import ScreenWrapper from "./componets/screen-wrapper"
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/app-navigator";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App= ()=>{
  return (

    <Provider store={store}>
       <NavigationContainer>
         <AppNavigator />
      </NavigationContainer>
    </Provider>
    
  );

};
export default App

const styles = StyleSheet.create({
     
})

