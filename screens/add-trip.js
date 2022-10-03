import {StyleSheet,Text,View,Image,TextInput} from "react-native"
import React,{useState,useEffect} from "react"
import { RANDOM_THUMBNAIL } from "../assets/assets";
import BackButton from "../componets/common/back-button";
import AddButton from "../componets/common/add-button";
import { useDispatch } from "react-redux";
import { addTrip } from "../redux/slice/trips";


/* *** ***** IN React the Componet name is capitalize otherwise it give you error */
const AddTrip= ({navigation})=>{
    const [placeBanner,setPlaceBanner] = useState();
    const [place,setPlace] = useState('');
    const [country,setCountry] = useState('');

    useEffect(()=>{
       setPlaceBanner(RANDOM_THUMBNAIL());
    },[]);
     
    const dispatch = useDispatch();

    const handleAddTrip = ()=> {
      const tripData = {
            id:Date.now(),
            place:place,
            country:country,
            banner:placeBanner,
            expenses:[],
      };
      dispatch(addTrip(tripData));
      navigation.navigate('Home'); 
    }
   
  return (
      
          <View style={styles.ScreenWrapper}>
              <View style={styles.addTripWrapper}>
                 <View>
                    <BackButton onPress={()=>navigation.goBack()}/>
                    <View style={styles.bannerContainer}>
                       <Image style={styles.placeBanner} source={placeBanner}/>
                     </View>
                     <View style={styles.form}>
                          <View style={styles.formItem}>
                              <Text style={styles.subHading}>Where on Earth</Text>
                              <TextInput 
                                  value={place} 
                                  onChangeText={
                                     e=>setPlace(e)
                                    }
                                  style={styles.input}
                              />
                        </View>
                        <View style={styles.formItem}>
                              <Text style={styles.subHading}>Which Country</Text>
                              <TextInput 
                                  value={country}  
                                  onChangeText={
                                     e=>setCountry(e)
                                    }
                                  style={styles.input}
                              />
                        </View>
                     </View>
                  </View>
                      
                  <AddButton buttonText='Add Trip' onPress={handleAddTrip}/>
              </View>
            </View>
      
    
  )

}
export default AddTrip

const styles = StyleSheet.create({
    addTripWrapper:{
       display: 'flex',
       justifyContent: 'space-between',
       height: '100%',
    },
    bannerContainer:{    
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    },
    form: {
      marginVertical:10,
    },
    formItem:{
        marginVertical:15,
    },
    input:{
       backgroundColor: '#FFFF',
       marginTop:12,
       fontSize:16,
       padding:12,
       borderRadius:18,
    },
    placeBanner:{
        height:240,
        width:'100%',
        resizeMode:"cover",
    },
    subHading:{
       backgroundColor:'black',
       color:'white',
       fontSize:20,
       fontWeight:'600',
       paddingHorizontal:24,
       paddingVertical:6,
       width:200,
       borderRadius:18,

       
    },
    ScreenWrapper:{
        paddingTop:Platform.OS === 'ios' ? 60 : 30,
        paddingHorizontal:24,
        paddingBottom:32,
        backgroundColor:'#F9F4F3',
        minHeight:"100%"
    },
})

