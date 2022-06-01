const initstate={
    pending:true,
    list:[],
    error:false
}


export const todoReducer=(state=initstate,action)=>{
   switch(action.type){
       case"GET_TODOS_REQUEST":{
           return {
               ...state,
               pending:true,
               list:[],
               error:false
           }
       }
       case"GET_TODOS_SUCCESS":{
        return {
            ...state,
            pending:false,
            list:action.payload,
            error:false
        }
    }
    case"GET_TODOS_FAILURE":{
        return {
            ...state,
            pending:false,
            error:action.payload
        }
    }
    default:return state
   }
}