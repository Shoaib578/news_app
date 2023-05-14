import {VisibleModal, VisibleSearch} from '../actions'

const initialState = {
    visible_modal:false,
    visibleSearch:false
   
    
   
  };


  const VisibilityReducer =(state=initialState,action)=>{
    
   

    switch(action.type){
        
        case VisibleModal:
           return {...state,visible_modal:action.payload}
        case VisibleSearch:
           return {...state,visible_modal:false,visibleSearch:action.payload}


        default:
            return state
    }
}
export default VisibilityReducer