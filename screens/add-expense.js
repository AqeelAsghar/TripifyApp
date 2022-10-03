import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity} from "react-native"
import React,{useState}from "react"
import AddButton from "../componets/common/add-button"
import BackButton from "../componets/common/back-button"
import { IMAGES } from "../assets/assets"
import {useDispatch} from "react-redux";
import { addExpense } from "../redux/slice/trips"

const CATEGORIES = ["Food","Shopping","Commute","Entertainment","Others"];

/****** IN React the Componet name is capitalize otherwise it give you error ********/
const AddExpense= ({navigation,route})=>{
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [category,setCategory] = useState('');

    const selectedTrip = route.params;
    const dispatch = useDispatch();

    const handleAddExpense = ()=>{
        const expense = {
            id:Date.now(),
            title:title,
            amount:amount,
            category:category,
        };
        const data = {
            tripId:selectedTrip.id,
            expenses:expense,
        };
        dispatch(addExpense(data));
        navigation.navigate('Trip Expenses', selectedTrip);
    }
  return (
      
        <View style={styles.ScreenWrapper}>
            <View style={styles.addExpenseWrapper}>
                <View>
                     <BackButton onPress={()=>navigation.goBack()}/>
                     <View style={styles.bannerContainer}>
                        <Image style={styles.banner} source={IMAGES.ADD_EXPENSE}/>
                        <View style={styles.subHandingContainer}>
                            <Text style={styles.subHading}>Add New Expenses</Text>
                        </View>
                     </View>
                        <View style={styles.form}>
                            <View style={styles.formItem}>
                              <Text style={styles.label}>For What?</Text>
                              <TextInput 
                                  value={title} 
                                  onChangeText={
                                     e=>setTitle(e)
                                    }
                                  style={styles.input}
                              />
                            </View>
                            <View style={styles.formItem}>
                              <Text style={styles.label}>Who Much?</Text>
                              <TextInput 
                                  value={amount} 
                                  onChangeText={
                                     e=>setAmount(e)
                                    }
                                  style={styles.input}
                              />
                            </View>
                            <View style={styles.formItem}>
                              <Text style={styles.label}>category</Text>
                               <View style={styles.categoryOptions}>
                                   {CATEGORIES.map((cat)=>(
                                       <TouchableOpacity style={{
                                           ...styles.category,
                                             backgroundColor:category===cat ? 'green':'#fff',
                                       }}
                                       onPress={() => setCategory(cat)}
                                       >
                                           <Text style={{...styles.categoryLabel,
                                             color:category===cat ? 'white' : 'black'}}>{cat}</Text>
                                       </TouchableOpacity>
                                   ))}
                               </View>
                            </View>
                        </View>
                </View>
                <View>
                    <AddButton onPress={handleAddExpense}/>
                </View>

            </View>
        </View>
      
    
  )

}
export default AddExpense

const styles = StyleSheet.create({
    addExpenseWrapper:{
       display: 'flex',
       justifyContent: 'space-between',
       height: '100%',
    },
    banner:{
         height:240,
         width:'100%',
         resizeMode:'cover',
    },
    bannerContainer:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    category:{
      paddingVertical:12,
      paddingHorizontal:24,
      marginRight:6,
      marginBottom:6,
      borderRadius:12
    },
    categoryLabel:{
        fontSize:12,
        fontWeight:'600',
    },
    categoryOptions:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      marginTop:12,
    },
    form: {
        marginVertical:6,
      },
      formItem:{
          marginVertical:6,
      },
     label:{
        backgroundColor:'black',
        color:'white',
        fontSize:14,
        fontWeight:'600',
        paddingHorizontal:18,
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
    subHading:{
       textAlign:'center',
       fontSize:16,
       fontWeight:'600',
       color:"#fff",
       backgroundColor:"black",
       borderRadius:12,
       paddingVertical:12,
       paddingHorizontal:12,
    },
    subHandingContainer:{
        position:'absolute',
        bottom:-35,
        right:-5,
        paddingVertical:8,
    },
    input:{
        backgroundColor: '#FFFF',
        marginTop:1,
        fontSize:12,
        padding:5,
        borderRadius:18,
     },
})

