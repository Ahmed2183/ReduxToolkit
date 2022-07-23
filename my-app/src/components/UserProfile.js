import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {updateName,updateAge,updateAddress,fetchUserName} from '../reducers/userReducer'
// import {changeAddress,fetchName} from '../actions/action'

function UserProfile() {

   const {name,age,address} = useSelector((state)=>state)

   const dispatch = useDispatch();

    const changeName = () => {
        dispatch(fetchUserName())
    }

//    const changeName = (name) => {
//            dispatch(updateName(name))
//        }
       const changeAge =  (age) => {
        dispatch(updateAge(age))
    }
    const changeAddress =  (address) => {
        dispatch(updateAddress(address))
    }

//    const changeName = async () => {
//        dispatch(fetchName());
//    }
//    const changeAge = (age) => {
//     dispatch({type:'UPDATE_AGE',payload:age})
//    }
//    const changeAddress = (address) => {
//     dispatch(changeAddress(address));
//    }

    return (
        <div>
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>My address is {address}</h1>
            <button onClick={()=>changeName()}>Update Name</button>
            <button onClick={()=>changeAge(30)}>Update Age</button>
            <button onClick={()=>changeAddress("Karachi")}>Update Address</button>
        </div>
    );
}

export default UserProfile;