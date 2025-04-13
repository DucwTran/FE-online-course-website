import { Button, Form, Input, message } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../../Utils/generateToken";
import {
  checkExist,
  createAccount,
  getAllUsers,
} from "../../../Services/userService";
import { getFormattedDate } from "../../../Utils/dateTime";

function Register() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    const token = generateToken();
    const checkExistEmail = await checkExist("email", values.email);
    const allUser = await getAllUsers();

    if (checkExistEmail.length > 0) {
      messageApi.error("Email đã tồn tại!");
    } else {
      const dateTime = getFormattedDate();
      const user = {
        ...values,
        id: (allUser.length + 1).toString(),
        token,
        status: "inactive",
        role: "admin",
        createAt: dateTime,
        lastLogin: null,
        avatar: null,
      };
      const result = await createAccount(user);
      if (result) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex justify-center items-center m-[70px]">
        <div className="w-[30%]">
          <h1 className="font-[700] text-[27px] text-[#001931] mb-5 text-center">
            Đăng kí
          </h1>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item
              name="fullName"
              label={<span className="text-[19px] italic">Tên đầy đủ</span>}
            >
              <Input
                className="border-gray-500"
                placeholder="Full Name"
                size="large"
              />
            </Form.Item>
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
              name="username"
              label={<span className="text-[19px] italic">User Name</span>}
            >
              <Input
                className="border-gray-500"
                placeholder="User Name"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
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
                <div className="text-[18px] font-[500] p-3">Sign up</div>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
