import { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Type your new todo here..."
                value={inputValue}
                onChange={(e) => {
                    const isDuplicateTodos = todos.some((todo) => todo.text === todo);
                    if (!isDuplicateTodos) {
                        setInputValue(e.target.value);
                        setInputValue('');
                    }
                }
                }
            />
            <button 
                className="new-todo-button"
                onClick={() => onCreatePressed(inputValue)}
            >Create Todo</button>
        </div>
    )
}
export default NewTodoForm;