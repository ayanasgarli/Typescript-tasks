import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Delete from "./Delete";
import Edit from "./Edit";


function Todos() {
  const reduxTodos = useSelector((state: RootState) => state.todo.todos);

  return (
    <>
      <ul>
        {reduxTodos &&
          reduxTodos.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.title} 
                <Edit id={elem.id} />
                <Delete id={elem.id} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Todos;
