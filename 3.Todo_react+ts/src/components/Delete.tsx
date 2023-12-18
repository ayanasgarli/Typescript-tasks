import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import { Button } from "antd";
import { DeleteOutlined} from '@ant-design/icons';

interface Id {
  id: string;
}

function Delete({ id }: Id) {
  const dispatch = useDispatch();
  return (
    <Button
    style={{color: 'red'}}
      onClick={() => {
        dispatch (deleteTodo(id));
      }}
    >
      <DeleteOutlined />
      {/* <DeleteTwoTone /> */}
    </Button>
  );
}

export default Delete;
