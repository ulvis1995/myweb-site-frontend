import React from 'react';
import st from './create-portfolio.module.scss';
import { Form, Input, Button, Upload, Checkbox, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log(values);
};

const CreatePortfolio = () => {
  const typeProject = [
    {
      id: 1,
      title: 'Учебные проекты',
    },
    {
      id: 2,
      title: 'Мои работы',
    },
  ];

  return (
    <div className={st.portfolio_form}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
        <Form.Item
          label="Название проекта"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста введите название' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Git"
          name="gitUrl"
          rules={[{ required: true, message: 'Вставьте ссылку на Git' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Деплой" name="deploy">
          <Input />
        </Form.Item>
        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Пожалуйста напишите описание' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Загрузить файл"
          valuePropName="fileList[]"
          name="imgUrl"
          rules={[{ required: true, message: 'Добавьте изображение' }]}>
          <Upload listType="picture-card">
            <div className={st.upload}>
              <PlusOutlined />
              <div>Загрузить файл</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Список технологий" name="technology">
          <Input />
        </Form.Item>
        <Form.Item label="Лучшая работа" name="is_best_work" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        <Form.Item
          label="Тип проекта"
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
            Добавить в портфолио
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePortfolio;
