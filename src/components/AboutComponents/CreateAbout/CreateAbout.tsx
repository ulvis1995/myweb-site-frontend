import React from 'react';
import st from './create-about.module.scss';
import { Form, Input, Button, Select } from 'antd';

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log(values);
};

const CreateAbout = () => {
  const typeProject = [
    {
      id: 1,
      title: 'Еще обо мне',
    },
    {
      id: 2,
      title: 'Планы',
    },
    {
      id: 3,
      title: 'Образование',
    },
    {
      id: 4,
      title: 'Увлечения',
    },
    {
      id: 5,
      title: 'Опыт',
    },
  ];

  return (
    <div className={st.about_form}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
        <Form.Item
          label="Текст"
          name="text"
          rules={[{ required: true, message: 'Напишите о себе' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Тип информации"
          rules={[{ required: true, message: 'Выберете тип' }]}
          name="type">
          <Select>
            {typeProject.map((type) => (
              <Select.Option value={type.id} key={type.id}>
                {type.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className={st.row_button}>
          <Button type="primary" htmlType="submit">
            Добавить информацию
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAbout;
