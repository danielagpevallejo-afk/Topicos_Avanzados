import { type TodoItem } from '../types/TodoItem'

todoCardProps interface {
  item: TodoItem,
  han
}


export const TodoCard = () => {
  return (
    <div className="grid">
      <article className="card">
        <div className="stack">
          <h3>Revisar documentación</h3>
          <p className="text-muted">
            Leer los requisitos del proyecto y anotar las dudas.
          </p>
        </div>

        <div className="card__footer cluster cluster--spread">
          <label className="cluster">
            <input type="checkbox" />
            <span>Pendiente</span>
          </label>

          <button type="button" className="btn--danger btn--sm">
            Eliminar
          </button>
        </div>
      </article>

      {/* Diseño: tarea completada */}
      <article className="card">
        <div className="stack">
          <h3>Preparar presentación</h3>
          <p className="text-muted">
            Organizar las diapositivas para la reunión.
          </p>
        </div>

        <div className="card__footer cluster cluster--spread">
          <label className="cluster">
            <input type="checkbox" defaultChecked />
            <span>Completada</span>
          </label>

          <button type="button" className="btn--danger btn--sm">
            Eliminar
          </button>
        </div>
      </article>
    </div>
  );
};