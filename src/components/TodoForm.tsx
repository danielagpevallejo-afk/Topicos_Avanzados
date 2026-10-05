import { useReducer } from "react";


//help us to initialize the status of our form, so that it is not undefined and gives us an error when trying to access its properties
type TodoFormsState = {

  title: string,
  description: string
  
}

const initialState: TodoFormsState = {

  title: '',
  description: ''
  
}


function eventInputReducer(prev:any,next:any) {

  return {...prev,...next}
  
}


interface todoFormProps {
  handleAddTodo: ()=> void
}


export const TodoForm = (props: todoFormProps) => {

  const [inputValues,dispatchInputValues] = useReducer(eventInputReducer,initialState)
  const addTodoTrigger = () => {
    
    if (!(inputValues.title == '' || inputValues.description == '')) {
      handleAddTodo(inputValues.title,inputValues.description)
      dispatchInputValues({title:'',description:''})
    }

  }

  return (
    <section className="card stack" aria-labelledby="todo-form-title">
      <div className="card__header">
        <h2 id="todo-form-title">Nueva tarea</h2>
      </div>

      <div className="form-group">
        <label htmlFor="todo-title">Título</label>
        <input
        
          id="todo-title"
          name="title"
          type="text"
          placeholder="Ej. Revisar documentación"
        />
      </div>

      <div className="form-group">
        <label htmlFor="todo-description">Descripción</label>
        <textarea
          id="todo-description"
          name="description"
          placeholder="Describe what you need to do"
          value={inputValues.description}
          onChange={(e) => dispatchInputValues({description:e.target.value})}
        />
      </div>

      <button type="button" onClick={addTodoTrigger}>Agregar tarea</button>
    </section>
  );
}
