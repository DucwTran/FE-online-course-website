import { Button, Popconfirm, Tooltip } from "antd";
// import { deleteJob } from "../../../Services/jobService";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteUser } from "../../../Services/userService";

function DeleteAdmin(props) {
  const { admin, onReLoad } = props;
  const handleDelete = async () => {
    const response = await deleteUser(admin.id);
    if (response) {
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

export default DeleteAdmin
