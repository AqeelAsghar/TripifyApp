import { createSlice } from "@reduxjs/toolkit"

{/* redux is the state management that is use to manage the state
    and use when we use complex logic 
    i have 4 components 
    1)VIEW      view is use to display the result
    2)Action    action is use to perform action 
    3)Reducer   is use to what do base on the action behaviour
    4)Store     is use to store the reducer and actions 

    in past we create 4 diifrent files for them but know we make only two types of files
    slice and store 
    Slice is for managing 1 component user,teachar,staff,hR and all
    store is for store we make different stores base on slices 
*/}

{/* this is initial state that tell initial state take object that name is trips  */}
const initailTripState = {
    trips: [],
}
{/*now we create slice for our trip app as we manage on trips here that why we just make 1 slicer and 1 store */}
export const tripSlice = createSlice({
    /* name of the slicer*/ 
      name: 'Trips',  
      initialState: initailTripState, /* setting initial state*/
      /*now add events or functionalities whic you want to perform */
      reducers:{
          addTrip:(state,action) => {
              /*asscessing initial state = copy provious data + add new action data into the trips array*/
              state.trips = [...state.trips, action.payload];
          },
          addExpense:(state, action) => {
              /*To get a trip id so we can map a correct trip expense into correct trip*/
              const tripId = action.payload.tripId;
              state.trips = state.trips.map(trip =>{
                  /*if tripid is match with trip array trip id  */
                  if(trip.id === tripId){
                      /*add expenses in trip = copy previous expenses and add new expenses into it */
                      trip.expenses = [...trip.expenses,action.payload.expenses]
                  }
                  /*then return trip array*/
                return trip;
              })
          }
      }
})

/* exporting the actions  */
export const {addTrip,addExpense} = tripSlice.actions;
/* default export is reducer */
export default tripSlice.reducer;

/*

a = [1,2,3]

:: in ths variable_name iterator which start from the first to last element
b = a.map((variable_name)=> variable_name+1)

output is:
b[2,3,4]


*/