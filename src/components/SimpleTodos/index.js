import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {updatedList: initialTodosList}

  deleteTodo = id => {
    const {updatedList} = this.state
    const filteredList = updatedList.filter(each => each.id !== id)
    this.setState({updatedList: filteredList})
    console.log(id)
  }

  render() {
    const {updatedList} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {updatedList.map(eachItem => (
              <TodoItem
                description={eachItem.title}
                deleteTodo={this.deleteTodo}
                key={eachItem.id}
                id={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
