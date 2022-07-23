import { createReducer,createSlice,createAsyncThunk } from "@reduxjs/toolkit"; //createSlice for creating both actions and reducer
// import {changeAddress} from '../actions/action'

const initialState = {
    name: "Ahmed", 
    age: "25",
    address:"Ryk"
}

export const fetchUserName = createAsyncThunk( // For async
    'fetchuser', //should be unique its type
    async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const result = await response.json();
       return result[Math.floor(Math.random()*10)].name 
    //    return result[0].name
    }
)


const userReducer = createSlice({
    name:'person', //types like : person/updateName,person/updateAge,person/updateAddress
    initialState,
    reducers: {
        updateName(state,action){
            state.name = action.payload
        },
        updateAge(state,action){
            state.age = action.payload
        },
        updateAddress(state,action){
            state.address = action.payload
        },
    },
    extraReducers:{ //For createAsyncThunk
        [fetchUserName.fulfilled]: (state, action) => { //fulfilled when response show
            state.name = action.payload
        },
        [fetchUserName.pending]: (state, action) => { //pending when response pending
            state.name = "Loading...."
        },
        [fetchUserName.rejected]: (state, action) => { //rejected when response rejected
            state.name = "Try Again"
        }
      },
})

export const {updateName,updateAge,updateAddress} = userReducer.actions;
export default userReducer.reducer;




// export default createReducer(initialState,(builder)=>{
//     builder.addCase('UPDATE_NAME',(state,action)=>{
//         state.name = action.payload
//     })
//     builder.addCase('UPDATE_AGE',(state,action)=>{
//         state.age = action.payload
//     })
//     builder.addCase(changeAddress.toString(),(state,action)=>{
//         state.address = action.payload
//     })
// })

