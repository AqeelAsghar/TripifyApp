import {StyleSheet,Text,View,Platform} from "react-native";
import React from "react";
import {COLORS} from "../theme/theme";
const ScreenWrapper= ({children})=>{
  return (
    <View styles={styles.ScreenWrapper}> {children} </View>
  )
}
export default ScreenWrapper

const styles = StyleSheet.create({
    ScreenWrapper:{
        paddingTop:Platform.OS === 'ios' ? 60 : 30,
        paddingHorizontal:24,
        paddingBottom:32,
        backgroundColor:COLORS.BACKGROUND,
        minHeight:"100%"
    },

});

