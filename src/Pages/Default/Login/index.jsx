import { Button, Form, Input, message } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { login, updateLastLogin } from "../../../Services/userService";
import { getFormattedDate } from "../../../Utils/dateTime";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../../Redux/userSlice";

function Login() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const data = await login(values.email, values.password);
    if (data.length > 0 && data[0].status === "active") {
      localStorage.setItem("user", JSON.stringify(data[0]));
      // dispatch(loginUser(data[0].id));
      const dateTime = {
        lastLogin: getFormattedDate(),
      };
      const res = await updateLastLogin(data[0].id, dateTime);

      if (res) {
        if (data[0].role === "student") {
          navigate("/user");
        } else if (data[0].role === "admin") {
          navigate("/admin");
        }
      }
    } else if (data[0].status !== "active") {
      messageApi.error("Tài khoản của bạn đã bị khóa!");
    } else {
      messageApi.error("Tài khoản hoặc mật khẩu không chinh xác!");
    }
  };
  return (
    <>
      {contextHolder}
      <div className="flex justify-center items-center m-[80px]">
        <div className="w-[30%]">
          <h1 className="font-[700] text-[27px] text-[#001931] mb-5 text-center">
            Đăng Nhập
          </h1>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item
              name="email"
              label={<span className="text-[19px] italic">Email</span>}
            >
              <Input
                className="border-gray-500"
                placeholder="Email"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={<span className="text-[19px] italic">Password</span>}
            >
              <Input.Password
                autoComplete="new-password"
                className="border-gray-500"
                placeholder="Password"
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="mt-3"
              >
                <span className="text-[18px] font-[600]">Login</span>
              </Button>
            </Form.Item>
          </Form>
          <div className="w-[full] h-[1px] bg-gray-300 mx-auto"></div>
          <div className="w-[200px] mt-[30px] mx-auto flex items-center justify-center">
            <span className="inline-block mr-1 text-[#4d5e6f]">
              No account?
            </span>{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
