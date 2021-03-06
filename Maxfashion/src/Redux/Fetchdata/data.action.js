import axios from "axios";
import { GETDATA_ERROR, GETDATA_LOADING, GETDATA_SUCCESS} from "./data.types"

export const getWomenData = () => (dispatch)=> {
    dispatch({ type: GETDATA_LOADING});
    axios.get("https://maxfashionbackendclone.herokuapp.com/women")
    .then((e)=>{
        dispatch({type:GETDATA_SUCCESS, payload:e.data})
    })  
    .catch(() => {
        dispatch({type:GETDATA_ERROR});
    });
}
export const getMenData = () => (dispatch)=> {
    dispatch({ type: GETDATA_LOADING});
    axios.get("https://maxfashionbackendclone.herokuapp.com/men")
    .then((e)=>{
        dispatch({type:GETDATA_SUCCESS, payload:e.data})
    })  
    .catch(() => {
        dispatch({type:GETDATA_ERROR});
    });
}
