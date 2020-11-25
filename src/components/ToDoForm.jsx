import React from 'react';
import { Form, Input, Button } from 'antd';

export const ToDoForm = (props) => {
  const { onSubmit } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (onSubmit) {
      onSubmit(values.name);
    }
    form.resetFields();
  }

  return (
    <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
      <Form.Item name="name" className="todo-form-input">
        <Input placeholder={'New todo'} />
      </Form.Item>
      <Form.Item className="todo-form-actions">
        <Button htmlType="submit" type="primary">Add</Button>
      </Form.Item>
    </Form>
  )
}
