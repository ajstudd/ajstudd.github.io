import { Button, Card, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

export default ({ changeMode }) => {
  return (
    <>
      <Card
        className="fade-in"
        style={{ maxWidth: 400 }}
        bordered={false}
        title="Register"
        actions={[
          <Button type="primary" block>
            Register
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Full Name">
            <Input prefix={<UserOutlined />} placeholder="Enter your name" />
          </Form.Item>

          <Form.Item label="Email">
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
          </Form.Item>
          <a onClick={changeMode}>Already have an account?</a>
        </Form>
      </Card>
    </>
  );
};
