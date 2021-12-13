import './TodoList.css'
import React from 'react'
import Todo from '../Todo/Todo'
import NewTodo from '../NewTodo/NewTodo'
import useLocalStorage from '../../hooks/useLocalStorage'

//--------------------------------------------- HOOKS -----------------------------------------//

const TodoList = () => {
    const [todos, setTodo] = useLocalStorage('todos', [])

    const create = (newTodo) => setTodo([...todos, newTodo])
    const edit = (id, updatedTask) => setTodo(todos.map(todo => (todo.id === id) ? {...todo, task: updatedTask} : todo));
    const remove = (id) => setTodo(todos.filter(todo => (todo.id !== id)))
    const toggleComplete = (id) => setTodo(todos.map(todo => (todo.id === id) ? {...todo, isCompleted: !todo.isCompleted } : todo));

    return (
        <div className="TodoList">
            <h1>TODO LIST</h1>
            <ul>
                {todos.map(t => (
                    <Todo key={t.id} task={t.task} id={t.id} remove={remove} edit={edit} 
                        isCompleted={t.isCompleted} toggleComplete={toggleComplete} 
                    />
                ))}
            </ul>
            <NewTodo create={create} />
        </div>
    )
}

export default TodoList;

//--------------------------------------------- CLASS -----------------------------------------//

// class TodoList extends React.Component {
//     constructor(props) {
//         super(props)
//             this.state = {
//                 todos: []
//             }
//     }

//     create = (newTodo) => {
//         this.setState({
//             todos: [...this.state.todos, newTodo]
//         })
//     }

//     remove = (id) => {
//         this.setState({
//             todos: this.state.todos.filter(t => (t.id !== id))
//         })
//     }

//     update = (id, updatedTask) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return { 
//                         ...todo, 
//                         task: updatedTask 
//                     }
//                 }
//                 return todo
//             })
//         })
//     }

//     toggleCompletion = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return { 
//                         ...todo, 
//                         isCompleted: !todo.isCompleted 
//                     }
//                 }
//                 return todo
//             })
//         })
//     }

//     render() {
//         return (
//             <div className="TodoList">
//                 <h1>TODO LIST</h1>
//                 <ul>
//                     {
//                     this.state.todos.map(t => (
//                         <Todo 
//                             key={t.id} 
//                             task={t.task} 
//                             id={t.id} 
//                             remove={this.remove} 
//                             update={this.update} 
//                             isCompleted={t.isCompleted} 
//                             toggleCompletion={this.toggleCompletion} 
//                         />
//                     ))}
//                 </ul>
//                 <NewTodo createTodo={this.create} />
//             </div>
//         )
//     }
// }

// export default TodoList;
