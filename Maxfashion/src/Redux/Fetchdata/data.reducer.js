import { GETDATA_ERROR, GETDATA_LOADING, GETDATA_SUCCESS } from "./data.types";

const inital = {
    getdata:{
        loading:false,
        error:false,

    },
    data:[]
   

}

export const dataReducer = (state=inital, { type, payload })=> {
    switch (type) {
        case GETDATA_LOADING:{
                return { ...state, getdata:{
                    ...state.getdata,
                    loading:true,
                    error:false,
                }}    
        }
        case GETDATA_SUCCESS:{
                return { ...state, getdata:{
                    ...state.getdata,
                    loading:false,
                    error:false,
                },
                data:payload,
            }      
        }
        case GETDATA_ERROR:{
                return { ...state, getdata:{
                    ...state.getdata,
                    loading:false,
                    error:true,
                }
            }
        }
        default:{
          return state;
        }
    }
};

