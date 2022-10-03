import {StyleSheet,Text,View,ScrollView,SafeAreaView} from "react-native"
import React from "react"
import { CATEGORY_BG } from "../../theme/theme"

/****** IN React the Componet name is capitalize otherwise it give you error ********/
const ExpenseCard= ({expense})=>{
  return (
        <View 
        style={{
            ...styles.CardWrapper,
            backgroundColor:CATEGORY_BG[expense.category]
            }}>
            <View>
                <Text style={styles.expenseTitle}>{expense.title}</Text>
                <Text style={styles.expenseCategory}>{expense.category}</Text>
            </View>
            <View>
                <Text style={styles.expenseAmount}>${expense.amount}</Text>
            </View>
        </View>
      
    
  )

}
export default ExpenseCard

const styles = StyleSheet.create({
    CardWrapper:{
        padding:10,
        marginTop:10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection:'row',
        borderRadius:18,
        alignItems: 'center',
    },
    expenseAmount:{
        fontSize:20,
        color:'#fff',
    },
    expenseCategory:{
        fontSize:12,
        marginVertical:4,
        color:'#677987'
    },
    expenseTitle:{
        fontSize:16,
        fontWeight:'600',
        color:'#2F4858',
    },
})

