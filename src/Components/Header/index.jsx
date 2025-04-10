import { Link } from "react-router-dom";
import { ButtonRoute } from "../ButtonRoute";
function Header() {
  return (
    <div className="flex items-center justify-between w-full h-[auto] lg:h-[92px] flex-col lg:flex-row py-[20px] lg:px-[80px] xl:px-[100px] 2xl:px-[200px]">
      <div>
        <div className="text-[26px] font-[650] text-[#17254E]">
          <Link
            to="/"
            className="uppercase leading-2 font-['Nunito'] tracking-tight"
          >
            TohC Courses
          </Link>
        </div>
      </div>
      <ButtonRoute value={"Login/Sign up"} route={"/login"} />
    </div>
  );
}

export default Header;
