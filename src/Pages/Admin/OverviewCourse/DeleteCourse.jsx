import { Popconfirm, Tooltip } from "antd";
import { Trash2 } from "lucide-react";
import { deleteCourse } from "../../../Services/courseService";

function DeleteCourse(props) {
  const { course, onReLoad } = props;
  const handleDelete = async () => {
    const response = await deleteCourse(course.id);
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

export default DeleteCourse
