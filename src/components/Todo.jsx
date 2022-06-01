import axios from "axios"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { todoRequest, todoSuccess } from "../action"
import { Todolist } from "./Todolist"


export const Todo=()=>{

    const state=useSelector((state)=>state.todoReducer)
    let dispatch=useDispatch()

    useEffect(()=>{
       dispatch(todoRequest());
       loaddata().then((res)=>dispatch(todoSuccess(res.data)))
    },[])

    const loaddata=async()=>{
     return await axios("http://localhost:8080/todos",{
         method:"GET"
     })
    }
    return (
        <div>
            {state.pending && <div>...loading</div>}
            {state.list.map((el)=>{
                return <Todolist data={el}/>
            })}
        </div>
    )
}