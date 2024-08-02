import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Button, Container, Row } from "react-bootstrap";


const Todo = () => {
    const {todosIS} = useSelector(state => state.todos)//store को reducer भित्र कुन state लिने हो त्यही नाम state पछि लेख्नु पर्छ ।
    const dispatch = useDispatch()
    return(
        <>
            <Container>
                {todosIS.map(todo => (
                    <Row>
                        {todo.text}
                        <button style={{width: "70px"}} onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                    </Row>
                ))}
            </Container>
        </>
    )
}

export default Todo;