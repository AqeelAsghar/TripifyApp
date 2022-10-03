import {StyleSheet,Text,View,TouchableOpacity,Image,FlatList} from "react-native"
import React from "react"
import ScreenWrapper from "../componets/screen-wrapper"
import { IMAGES, RANDOM_THUMBNAIL } from "../assets/assets"
import EmptyList from "../componets/home/empty-list"
import { useSelector } from "react-redux"

/* *** ***** IN React the Componet name is capitalize otherwise it give you error */
const Home= ({navigation})=>{
  const tripList = useSelector(state=>state.trips.trips); /* state.reducer name.which data we needed */
  return (
      
        <View style={styles.ScreenWrapper}>
            <View>
               <View style={styles.homeHeader}>
                  <Text style={styles.heading}>TRIPIFY</Text>
                </View>
                <View style={styles.bannerContainer}>
                   <Image source={IMAGES.TRIFIFY_BANNER} style={styles.banner}/>
                   <TouchableOpacity onPress={()=>navigation.navigate('Add Trip')}>
                     <View style={styles.addTripButton}>
                      <Text style={styles.addButtonText}>Add Trip</Text>
                     </View>
                    </TouchableOpacity>
                </View>   
            </View>
            <Text style={styles.subHeadingText}>RECENT TRIPS</Text>
            <View style={styles.listWrapper}>
                <FlatList 
                  data={tripList} /* data */
                  keyExtractor={item =>item.id} /*Key value */
                  numColumns={2}                /*Number of item shown in 1 column */
                  showsHorizontalScrollIndicator={false} /*disable the side scroll bar */
                  columnWrapperStyle={styles.tripLists}  /*styling the lists */
                  ListEmptyComponent={<EmptyList/>}      /*in case of empty list*/
                  renderItem ={({item})=>(               /*render item and show them */
                    <TouchableOpacity onPress={()=>navigation.navigate('Trip Expenses',item)}>
                      <View style={styles.tripCard}>
                        <Image style={styles.tripBanner} source={item.banner}/>
                        <Text style={styles.place}>{item.place}</Text>
                        <Text style={styles.country}>{item.country}</Text>
                      </View>
                    </TouchableOpacity>
                     
                 )}
                />
            </View>
        </View>

    
  )

}
export default Home

const styles = StyleSheet.create({
    addButtonText:{
      fontSize: 16,  
      fontWeight:'700',
      color:'#FFF'
    },
    addTripButton:{
        position: 'absolute',
        backgroundColor: 'black',
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:18,
        bottom:-25,
        left:-180,
    },
    banner:{
        width: '100%',
        height: 300,
        resizeMode:'cover',
    },
    bannerContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    country:{
      fontSize:14,
      color:"black",
      fontWeight:'600',
      marginLeft:6,
    },
    heading:{
      fontSize:28,
      fontWeight:'600',
      color:'#677987'
    },
    homeHeader:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    listWrapper:{
       marginBottom:120,
       height:420,
    },
    place:{
      fontSize:14,
      color:"black",
      fontWeight:'600',
      marginLeft:6,
    },
    ScreenWrapper:{
        paddingTop:Platform.OS === 'ios' ? 60 : 30,
        paddingHorizontal:24,
        paddingBottom:32,
        backgroundColor:'#F9F4F3',
        minHeight:"100%"
    },
    subHeadingText:{
        marginTop:36,
        fontWeight:"bold",
        fontSize:24,
        padding:5,
        color:"#FFF",
        backgroundColor:"black",
        borderRadius:12,
        paddingHorizontal:18,
    },
    tripBanner:{
        height:130,
        width:150,
    },
    tripCard:{
      backgroundColor:"white",
      marginBottom:12,
      marginHorizontal:6,
      padding:8,
      borderRadius:18,
    },
    tripLists:{
      justifyContent: "center",
      marginTop:10,
    },

})

