import { createStore } from 'redux';  
  
const initialValues = false;   
  
// 定义action类型  
const SET_STATE_TRUE = 'SET_STATE_TRUE';  
const SET_STATE_FALSE = 'SET_STATE_FALSE';  
  
// 定义Action类型  
type Action =  
    | { type: typeof SET_STATE_TRUE }  
    | { type: typeof SET_STATE_FALSE };  
  
// 修正reducer以返回新状态  
const reducer = function reducer(state = initialValues, action: Action):boolean {  
    switch (action.type) {  
        case 'SET_STATE_TRUE':  
            return true; // 返回新状态，而不是修改state  
        case 'SET_STATE_FALSE':  
            return false; // 返回新状态，而不是修改state  
        default:  
            return state; // 如果没有匹配的动作类型，返回原状态  
    }  
};  
  
const store = createStore(reducer);
export default store;
