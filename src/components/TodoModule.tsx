import { TodoCard } from './TodoCard';
import { TodoForm } from './TodoForm';

export const TodoModule = () => {
  return (
    <main className="page">
      <div className="container stack">
        <header>
          <h1>Mis tareas</h1>
          <p className="text-muted">
            Organiza tus actividades pendientes.
          </p>
        </header>

        <TodoForm />

        <section className="stack" aria-labelledby="todo-list-title">
          <h2 id="todo-list-title">Lista de tareas</h2>
          
        {
          todos.length > 0 ? 
          
          (
          
            <div className="grid">
              
              {

              todos.map((item) => (
                
              <TodoCard
                item={item}
                handleDelete={() =>deleteTodo(item.id)}
                handleStatus={() =>changeStatusTodo(item.id)}
              />
//ayudamee no se que hacer xddd, me resulta que no me deja pasarle las props al componente TodoCard, me marca error y no se que hacer, ya intente de todo y no se que hacer, ayudame por favor
//eso se resuelve pasando las props al componente TodoCard, pero no se como hacerlo, me podrias ayudar a resolverlo por favor
//claro, para pasarle las props al componente TodoCard, primero debes definir las props que va a recibir el componente. En tu caso, parece que quieres pasarle un objeto `item` y dos funciones `handleDelete` y `handleStatus`.
//la estructura de las props en el componente TodoCard se ve así:
//todoCardProps interface {
//  item: TodoItem,
//  handleDelete: () => void,
//  handleStatus: () => void
//}

//Luego, cuando uses el componente TodoCard, debes pasarle las props de la siguiente manera:
//<TodoCard
//  item={item}
//  handleDelete={() => deleteTodo(item.id)}
//  handleStatus={() => changeStatusTodo(item.id)}
///>

//De esta manera, el componente TodoCard recibirá las props correctamente y no deberías tener problemas.
              ))
                
            }
            
            </div>
          ) :
          (<h1>No hay tareas pendientes</h1>)
        }

        </section>
      </div>
    </main>
  );
}
