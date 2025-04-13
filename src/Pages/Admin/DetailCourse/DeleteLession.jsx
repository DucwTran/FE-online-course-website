import { Popconfirm, Tooltip } from "antd";
import { deleteLession } from "../../../Services/lessionSerive";
import { Trash2 } from "lucide-react";

function DeleteLession(props) {
  const { lession, onReLoad } = props;
  const handleDelete = async () => {
    const response = await deleteLession(lession.id);
    if (response) {
      onReLoad();
    }
  };
  return (
    <div>
      <Tooltip title="Xóa bản ghi">
        <Popconfirm title="Bạn có muốn xóa không?" onConfirm={handleDelete}>
        <Trash2 size={18} />
        </Popconfirm>
      </Tooltip>
    </div>
  );
}

export default DeleteLession
