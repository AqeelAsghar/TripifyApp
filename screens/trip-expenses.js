import {StyleSheet,Text,View,Image,TouchableOpacity,FlatList} from "react-native"
import React from "react"
import BackButton from "../componets/common/back-button"
import ExpenseCard from "../componets/trips/expense-card"
import EmptyExpenses from "../componets/trips/empty-Expenses"
import { useSelector } from "react-redux"

/* *** ***** IN React the Componet name is capitalize otherwise it give you error */
const TripExpenses= ({navigation,route})=>{
    /* by doing this we get access the all elemets of params that we pass into Home.js with trip Expenses button*/
    const selectedTrip = route.params;

    const expenses = useSelector(state=>{
        const trips = state.trips.trips;
        const expensesToBeShown = trips.filter(trip=>trip.id === selectedTrip.id);
        if(expensesToBeShown.length>0) {
            return expensesToBeShown[0].expenses;
        }
        return [];
    });
  return (
      
        <View style={styles.ScreenWrapper}>
           <View>
               <BackButton onPress={()=>navigation.goBack()}>Home</BackButton>
               <View style={styles.bannerContainer}>
                   <Image style={styles.banner} source={selectedTrip.banner}/>
                   <View style={styles.placeContainer}>
                       <Text style={styles.place}>{selectedTrip.place}</Text>
                   </View>
               </View>
               <View style={styles.textButton}>
                   <Text style={styles.subHading}>Expenses</Text>
                   <TouchableOpacity onPress={()=>navigation.navigate('Add Expense',selectedTrip)}>
                          <Text style={styles.butonText}>Add Expense</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.flatListContainer}>
                     <FlatList 
                       data={expenses}
                       keyExtractor={item=>item.id}
                          renderItem={({item})=><ExpenseCard expense={item}/>}
                          showsVerticalScrollIndicator={false}
                          ListEmptyComponent={<EmptyExpenses/>}
                     />
               </View>
           </View>
        </View>
      
    
  )

}
export default TripExpenses

const styles = StyleSheet.create({
    banner:{
        height:240,
        width:'100%',
        resizeMode:'cover'
    },
    bannerContainer:{
         display:'flex',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'relative',
    },
    butonText:{
        color:"white",
        fontWeight:'700',
        backgroundColor:"black",
        fontSize:20,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
    },
    place:{
       textAlign:'center',
       color:'white',
       fontSize:20,
       fontWeight:'700'
    },
    placeContainer:{
        position:'absolute',
        backgroundColor:'black',
        paddingVertical:12,
        minWidth:'50%',
        borderRadius:18,
        bottom:-25,
        left:10,
    },
    subHading:{
       fontSize:20,
       fontWeight:'bold',
         color:'#677987',
         paddingVertical:10,
        paddingHorizontal:10,
    },
    ScreenWrapper:{
        paddingTop:Platform.OS === 'ios' ? 60 : 30,
        paddingHorizontal:24,
        paddingBottom:32,
        backgroundColor:'#F9F4F3',
        minHeight:"100%"
    },
    textButton:{
        display:'flex',
        flexDirection:'row', /* react native default direction is coloum and in react default deriction is row*/ 
        justifyContent:'space-between',
        marginTop:32,
        marginBottom:24,
    },

})

