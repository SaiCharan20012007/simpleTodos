// Write your code here
import './index.css'

const TodoItem = props => {
  const {description, deleteTodo, id} = props
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="listItem">
      <p className="para">{description}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
