import { Button, Card, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default ({ changeMode }) => {
  return (
    <>
      <Card
        className="fade-in"
        style={{ maxWidth: 400 }}
        bordered={false}
        title="Login"
        actions={[
          <Button type="primary" block>
            Login pls
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input prefix={<UserOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
          </Form.Item>
          <a onClick={changeMode}>Don't have an account?</a>
        </Form>
      </Card>
    </>
  );
};
