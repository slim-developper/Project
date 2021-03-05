import axios from 'axios'

//callback function
//dispatch action
const userRegister=(newUser)=>(dispatch)=>{
    dispatch({type:USER_REGISTER});
    
    try {
        //make request with axios
        const addResult=axios.post('/user/register',newUser)
        dispatch({type:REGISTER_SUCCESS,payload:addResult.data})
        
    } catch (error) {
        dispatch({type:REGISTER_FAIL,payload:error.response.data});
}

};