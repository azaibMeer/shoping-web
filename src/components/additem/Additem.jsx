import { Button, Form, Input,Select,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {UseState} from "react";
const props = {
  name: 'file',
 
};
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Additem = () => (
  <div style={{
    marginLeft: "22%",
    marginTop: "5%"
    }}>
      
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h2 style={{textAlign:"center"}}>Add Product</h2>
    <Form.Item
      label="Product Name"
      name="productname"
      rules={[
        {
          required: true,
          message: 'Please input your product!',
        },
      ]}
    >
      <Input />
      
    </Form.Item>
    <Form.Item name={['user', 'description']} label="Product Description">
      <Input.TextArea />
    </Form.Item>
    <Form.Item label="Select Category">
        <Select>
          <Select.Option value="demo">Select Product</Select.Option>
          <Select.Option value="demo">product A</Select.Option>
          <Select.Option value="demo">product b</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
      label="Product Unit"
      name="unit"
      rules={[
        {
          required: true,
          message: 'Please input your unit!',
        },
      ]}
    >
      <Input />
      
    </Form.Item>
    <Form.Item
      label="Price "
      name="price"
      rules={[
        {
          required: true,
          message: 'Please input your price!',
        },
      ]}
    >
      <Input />
      
    </Form.Item>
    <Form.Item label="Upload Image">
    <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Add product
      </Button>
    </Form.Item>
  </Form>
  </div>
);
export default Additem;