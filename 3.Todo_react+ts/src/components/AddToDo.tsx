import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { reduxGetTodo, reduxGetTodos } from "../redux/todoSlice";
import { Input, Button } from 'antd';


function AddToDo() {
  const reduxTodo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <>
      <Input 
        placeholder="add to do"
        style={{width: '200px', margin: '10px', }}
        type="text"
        onChange={(e) => {
          dispatch(reduxGetTodo(e.target.value));
        }}
      />
      <Button
        onClick={() => {
          dispatch(reduxGetTodos(reduxTodo));
        }}
      >
        Add
      </Button>
    </>
  );
}

export default AddToDo;
