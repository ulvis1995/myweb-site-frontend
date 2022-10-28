import React from 'react';
import st from './create-news.module.scss';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log(values);
};

const CreateNews = () => {
  return (
    <div className={st.news_form}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
        <Form.Item
          label="Заголовок"
          name="title"
          rules={[{ required: true, message: 'Пожалуйста введите заголовок' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Tекст новости"
          name="text"
          rules={[{ required: true, message: 'Пожалуйста введите текст новости' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="DatePicker"
          name="date"
          rules={[{ required: true, message: 'Пожалуйста выберете дату' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Загрузить файл" valuePropName="fileList[]" name="imgUrl">
          <Upload listType="picture-card">
            <div className={st.upload}>
              <PlusOutlined />
              <div>Загрузить файл</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item className={st.row_button}>
          <Button type="primary" htmlType="submit">
            Создать новость
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateNews;
