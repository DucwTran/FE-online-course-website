import { Button, Form, Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center m-[70px]">
      <div className="w-[30%]">
        <h1 className="font-[700] text-[27px] text-[#001931] mb-5 text-center">
          Đăng kí
        </h1>
        <Form layout="vertical">
          <Form.Item
            label={<span className="text-[19px] italic">Tên đầy đủ</span>}
          >
            <Input
              className="border-gray-500"
              placeholder="Full Name"
              size="large"
            />
          </Form.Item>
          <Form.Item label={<span className="text-[19px] italic">Email</span>}>
            <Input
              className="border-gray-500"
              placeholder="Email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-[19px] italic">Password</span>}
          >
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
            <Button type="primary" htmlType="submit" className="mt-3">
              <div className="text-[18px] font-[500] p-3">
              Sign up
              </div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
