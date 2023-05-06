import {Filter_by_category} from '../actions'

const initialState = {
    category:""
   
    
   
  };


  const ModalReducer =(state=initialState,action)=>{
    
   

    switch(action.type){
        
        case Filter_by_category:
           return {...state,category:action.payload}
        
        default:
            return state
    }
}
export default ModalReducer