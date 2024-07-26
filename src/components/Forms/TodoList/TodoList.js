import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../TodoForm/NewTodoForm';

import './TodoList.css';

const TodoList = ({todos = [{text: 'Hello'}]}) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            { todos?.map((todo, i) => <TodoListItem todo={todo} key={i} />)}
        </div>
    )
}

export default TodoList;