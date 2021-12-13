import './Todo.css'
import React, { useState } from 'react'
import editBtn from '../../img/edit.svg'
import trashBtn from '../../img/trash.svg'

//--------------------------------------------- HOOKS -----------------------------------------//

const Todo = (props) => {    
    const [isEditing, setEditing] = useState(false)
    const [task, setTask] = useState(props.task)

    const toggleEdit = () => setEditing(true)
    const handleRemove = () => props.remove(props.id)
    const handleToggle = () => props.toggleComplete(props.id)
    const handleChange = (e) => setTask(e.target.value)

    const handleUpdate = (e) => {
        e.preventDefault()
        props.edit(props.id, task)
        setEditing(false)
    }
      
    if (isEditing) {
        return(
            <div className="Todo" >
                <form className="Todo-edit" onSubmit={handleUpdate}>
                    <div>
                    <input 
                        type="text" 
                        placeholder="edit Todo" 
                        value={task} 
                        name="task" 
                        onChange={handleChange} 
                    /></div>
                    <div><button type="submit">Todo</button></div>
                </form>
            </div>
        );
    } else {
        return(
            <div className="Todo" >
                <li onClick={handleToggle} 
                    className={props.isCompleted ? "Todo-Task completed" : "Todo-Task"}>
                    {props.task}
                </li>
                <div className="Todo-buttons">
                    <button onClick={toggleEdit}>
                        <img className="editBtn" src={editBtn} alt="editBtn" />
                    </button>
                    
                    <button onClick={handleRemove}>
                        <img className="trashBtn" src={trashBtn} alt="trashBtn" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Todo;

//--------------------------------------------- CLASS -----------------------------------------//

// class Todo extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isEditing: false,
//             task: this.props.task,
//         }
//     }

//     handleRemove = () => {
//         this.props.remove(this.props.id)
//     }

//     toggleEdit = () => {
//         this.setState({
//             isEditing: !this.state.isEditing
//         })
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleUpdate = (e) => {
//         e.preventDefault()
//         this.props.update(this.props.id, this.state.task)
//         this.setState({isEditing: false})
//     }

//     handleToggle = () => {
//         this.props.toggleCompletion(this.props.id)
//     }

//     render() {
//         let results;

//         if (this.state.isEditing) {
//             results = (
//                 <div className="Todo" >
//                     <form className="Todo-edit" onSubmit={this.handleUpdate}>
//                         <input type="text" placeholder="edit Todo" value={this.state.task} name="task" onChange={this.handleChange} />
//                         <button type="submit">Todo</button>
//                     </form>
//                 </div>
//             )
//         } else {
//             results = (
//                 <div className="Todo" >
//                     <li onClick={this.handleToggle} className={this.props.isCompleted ? "Todo-Task completed" : "Todo-Task"}>{this.props.task}</li>
//                     <div className="Todo-buttons">
//                         <button onClick={this.toggleEdit}><img className="editBtn" src={editBtn} alt="" /></button>
//                         <button onClick={this.handleRemove}><img className="trashBtn" src={trashBtn} alt="" /></button>
//                     </div>
//                 </div>
//             )
//         }

//         return (
//             results
//         )
//     }
// }

// export default Todo;
