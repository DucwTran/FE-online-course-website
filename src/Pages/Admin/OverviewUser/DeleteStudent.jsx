import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteUser } from "../../../Services/userService";

function DeleteStudent(props) {
  const { student, onReLoad } = props;
  const handleDelete = async () => {
    const response = await deleteUser(student.id);
    if (response.status === "success") {
      onReLoad();
    }
  };
  return (
    <div>
      <Tooltip title="Xóa bản ghi">
        <Popconfirm title="Bạn có muốn xóa không?" onConfirm={handleDelete}>
          <Button
            className="ml-5"
            danger
            ghost
            icon={<DeleteOutlined />}
          ></Button>
        </Popconfirm>
      </Tooltip>
    </div>
  );
}

export default DeleteStudent
