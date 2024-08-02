import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { addTodo } from "../features/todo/todoSlice";
const AddTodos = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    //dispatch reducer को प्रयोग गरेर store मा update गर्दछ ।
    

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        console.log(input)
        setInput("");
    }

  return (
    <>
      <Container>
        <Form onSubmit={addTodoHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter text" value={input}
            onChange={(e) => setInput(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTodos;
