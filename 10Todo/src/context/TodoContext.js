import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos :[
     {
        id : 4,
        todo:"msg",
        completed: false,
     }
        ],

      addTodo: (todo)=>{},
      deleteTodo: (id)=>{},
      updatedTodo: (id , todo)=>{},
      toggleComplete:(id)=>{}

})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider