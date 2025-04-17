import { Popconfirm, Tooltip } from "antd";
import { Trash2 } from "lucide-react";
import { deleteEnrollments } from "../../../Services/enrollmentService";

function DeleteOrder(props) {
  const { order, onReLoad } = props;
  const handleDelete = async () => {
    const response = await deleteEnrollments(order.id);
    if (response) {
      onReLoad();
    }
  };
  return (
    <div>
      <Tooltip title="Xóa bản ghi">
        <Popconfirm title="Bạn có muốn xóa không?" onConfirm={handleDelete}>
        <Trash2 size={20} />
        </Popconfirm>
      </Tooltip>
    </div>
  );
}

export default DeleteOrder
