import {useReducer} from 'react'
import { type TodoItem } from '../types/TodoItem'
import type { TodoAction } from '../types/TodoAction';

//Se creara un tai para saber de que tipo sera el action y state xd
function reducerTodo(state:TodoItem[], action:TodoAction) {
    
    switch (action.type) {
        case "ADD": {
            
            return [...state,action.item]
            

        }

        case "STATUS":{
            
            return state.map((item)=> item.id == action.id
            ? {...item,isCompleted: !item.isComplete}
            :
            item) 
            
        }

        case "DELET":{

            return state.filter(item=>item.id !== action.id)

        }

    }

}

export const useTodo = () => {
    const [todos,dispatchTodo] = useReducer(reducerTodo,[])
    
    function addTodo(title:string,description:string){
    dispatchTodo({
        type:"ADD",
        item : {
            id:crypto.randomUUID(),
            title,
            description,
            isCompleted: false
        }
    })

}

}



