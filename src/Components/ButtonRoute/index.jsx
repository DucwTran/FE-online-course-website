import { ArrowRightOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";

export function ButtonRoute(props) {
  const { value, route } = props;
  return (
    <div>
      <div className="flex gap-2 items-center hover:shadow-[0px_3px_8px_rgba(0,_0,_0,_0.24)] rounded-[999px] scale-75 lg:scale-100">
        <Link
          to={route}
          className="font-light text-white text-[15px] flex items-center justify-center gap-3 bg-[#704FE6] pl-5 pr-0 rounded-[999px]"
        >
          <span>{value}</span>
          <div className="rounded-[999px] p-1 h-[47px] w-[47px] bg-[#826ada] m-0 flex justify-center items-center">
            <ArrowRightOutlined style={{ fontSize: "18px" }} />
          </div>
        </Link>
      </div>
    </div>
  );
}
