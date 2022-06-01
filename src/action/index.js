export const todoRequest=()=>{
    return {
        type:"GET_TODOS_REQUEST"
    }
}

export const todoSuccess=(data)=>{
    return {
        type:"GET_TODOS_SUCCESS",
        payload:data
    }
}

export const todoFailure=()=>{
    return {
        type:"GET_TODOS_FAILURE"
    }
}
