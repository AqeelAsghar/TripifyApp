import {StyleSheet,Text,View,Image} from "react-native"
import React from "react"
import { IMAGES } from "../../assets/assets"

/* *** ***** IN React the Componet name is capitalize otherwise it give you error */
const EmptyExpenses= ()=>{
  return (
      
          <View style={styles.emptyList}>
            <Text style={styles.message} >you haven't recorded any Expenses yet</Text>
            <Image style={styles.banner} source={IMAGES.EXPENSE_EMPTY}/>
            
          </View>
      
    
  )

}
export default EmptyExpenses

const styles = StyleSheet.create({
    banner:{
        height:240,
        width:240
    },
    emptyList:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:24
    },
    message: {
        fontSize:14,
        fontWeight: '600'
    }

})

