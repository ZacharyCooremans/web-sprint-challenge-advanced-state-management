import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const SET_ERROR = "SET_ERROR";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export const fetchSmurfs = () => (dispatch) =>{
    dispatch({type: FETCH_START});
    axios.get('http://localhost:3333/smurfs')
        .then((res =>{
            dispatch({type:FETCH_SUCCESS, payload:res.data})
        }))
        .catch(err =>{
            dispatch({type: FETCH_FAILED,payload:err})
        })
}

export const fetchStart = () => {
    return({type: FETCH_START})
}
export const fetchSuccess = (smurf) => {
    return({type: FETCH_SUCCESS, payload: smurf})
}
export const fetchFailed = (error) => {
    return({type: FETCH_FAILED, payload: error})
}
export const addSmurf = (smurf) => {
    return({type: ADD_NEW_SMURF, payload: smurf})
}
export const errorSmurf = (message) => {
    return({type: FETCH_SMURF_ERROR, payload:message})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.