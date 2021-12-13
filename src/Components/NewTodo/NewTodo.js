import './NewTodo.css'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const NewTodo = (props) => {
    const [task, setTask] = useState('');

    const handleChange = (e) => setTask(e.target.value)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.create({task, id: uuidv4(), isCompleted: false })
        setTask('')
    }
    
    return (
        <form className="NewTodo" onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="task" 
                value={task} 
                onChange={handleChange} 
            />
            <button type="submit">add todo</button>
        </form>
    )
}

export default NewTodo;

// class NewTodo extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             task: "",
//         }
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name] : evt.target.value
//         })
//     }

//     handleSubmit= (evt) => {
//         evt.preventDefault()

//         this.props.createTodo({
//             ...this.state,
//             id: uuidv4(), 
//             isCompleted: false 
//         })
        
//         this.setState({
//             task: ""
//         })
//     }

//     render() {
//         return (
//             <form className="NewTodo" onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     name="task" 
//                     id="task" 
//                     value={this.state.task} 
//                     onChange={this.handleChange} 
//                 />
//                 <button type="submit">add todo</button>
//             </form>
//         )
//     }
// }

// export default NewTodo;
