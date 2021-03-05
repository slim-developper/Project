
const {USER_REGISTER,REGISTER_FAIL,REGISTER_SUCCESS}=require('../constants/actionstypes')

const initialState={loading:false,errors:null,user:null,};
const userReducer=(state=initialState,{type,payload})=>{
switch(type){

    case USER_REGISTER:
    return{ 
        ...state,
            loading:true,};

case REGISTER_SUCCESS:
    return {
        ...state,
        loading:false,
        user:payload,
    }
case REGISTER_FAIL:
    return{
        ...state,
        loading:false,
        errors:payload,
    }    
    default:
         return state;
}

};