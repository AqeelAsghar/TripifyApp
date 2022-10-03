import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import AddTrip from "../screens/add-trip";
import AddExpense from "../screens/add-expense";
import TripExpenses from "../screens/trip-expenses";

const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return(
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
         <Stack.Screen name="Add Trip" component={AddTrip} options={{headerShown: false}} />
         <Stack.Screen name="Add Expense" component={AddExpense} options={{headerShown: false}} />
         <Stack.Screen name="Trip Expenses" component={TripExpenses} options={{headerShown: false}} />
       </Stack.Navigator>
    );
};

export default AppNavigator;