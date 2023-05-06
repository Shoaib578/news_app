import {combineReducers} from 'redux'
import ModalReducer from './ModalReducer'
const allReducers =combineReducers({
    modalData:ModalReducer,
   
})

export default allReducers