import { createAction } from "@reduxjs/toolkit"; //toolkit have by-default provide redux thunk

export const changeAddress = createAction('UPDATE_ADDRESS');

export const fetchName = () => {
    return async (dispatch) => {
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const result = await response.json();
       dispatch({type:'UPDATE_NAME',payload:result[0].name})
    }
}