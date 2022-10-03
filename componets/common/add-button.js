import {StyleSheet,Text,View,TouchableOpacity} from "react-native"
import React from "react";

/* *** ***** IN React the Componet name is capitalize otherwise it give you error */
const AddButton= (props)=>{
    const {buttonText,onPress} = props;
  return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.AddButton}>
            <Text style={styles.buttonText}>{buttonText ? buttonText :"ADD"}</Text>
        </View>
      </TouchableOpacity>
        
    
  )

}
export default AddButton

const styles = StyleSheet.create({
    AddButton:{
        backgroundColor:'green',
        paddingVertical:12,
        borderRadius:18,
        display: 'flex',
        alignItems: 'center',
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    }
})

