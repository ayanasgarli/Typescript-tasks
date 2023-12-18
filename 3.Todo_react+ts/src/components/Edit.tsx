import { useDispatch } from "react-redux";
import { editTodo } from "../redux/todoSlice";
import { Button } from "antd";
import { EditOutlined } from '@ant-design/icons';

interface Id {
  id: string;
}

function Edit({ id }: Id) {
  const dispatch = useDispatch();
  return (
    <Button
    style={{color:'blueviolet', margin: '8px'}}
      onClick={() => {
        const info = prompt();
        dispatch(editTodo({ id: id, title: info }));
      }}
    >
     <EditOutlined />
    </Button>
  );
}

export default Edit;
