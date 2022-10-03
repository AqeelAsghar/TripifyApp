import {StyleSheet,Text,View,Image,TouchableOpacity} from "react-native"
import React from "react"
import { ICONS } from "../../assets/assets"


/* *** ***** IN React the Componet name is capitalize otherwise it give you error */
const BackButton= (props)=>{
    const {onPress} = props;
  return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.iconWrapper}>
            <Image style={styles.backIcon} source={ICONS.BACK}/>
        </View>
      </TouchableOpacity>
        
      
    
  )
}
export default BackButton

const styles = StyleSheet.create({
    backIcon:{
        height:35,
        width:35,
    }
})

