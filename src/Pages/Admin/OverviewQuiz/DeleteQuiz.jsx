import { Popconfirm, Tooltip } from "antd";
import { Trash2 } from "lucide-react";
import { deleteQuiz } from "../../../Services/quizService";

function DeleteQuiz(props) {
  const { quiz, onReLoad } = props;
  const handleDelete = async () => {
    const response = await deleteQuiz(quiz.id);
    if (response.status ==="success") {
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

export default DeleteQuiz
