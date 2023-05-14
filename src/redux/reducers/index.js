import {combineReducers} from 'redux'
import ModalReducer from './ModalReducer'
import VisibilityReducer from './visibilityReducer'
const allReducers =combineReducers({
    modalData:ModalReducer,
    visibilityReducer:VisibilityReducer
   
})

export default allReducers