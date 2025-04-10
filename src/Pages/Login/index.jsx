import { Button, Form, Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center m-[80px]">
      <div className="w-[30%]">
        <h1 className="font-[700] text-[27px] text-[#001931] mb-5 text-center">
          Đăng Nhập
        </h1>
        <Form layout="vertical">
          <Form.Item label={<span className="text-[19px] italic">Email</span>}>
            <Input
              className="border-gray-500"
              placeholder="Email"
              size="large"
            />
          </Form.Item>
          <Form.Item label={<span className="text-[19px] italic">Password</span>}>
            <Input.Password
              className="border-gray-500"
              placeholder="Password"
              size="large"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item className="text-center">
            <Button size="large" type="primary" htmlType="submit" className="mt-3">
              <span className="text-[18px] font-[600]">Login</span>
            </Button>
          </Form.Item>
        </Form>
        <div className="w-[full] h-[1px] bg-gray-300 mx-auto"></div>
        <div className="w-[200px] mt-[30px] mx-auto flex items-center justify-center">
          <span className="inline-block mr-1 text-[#4d5e6f]">No account?</span>{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
