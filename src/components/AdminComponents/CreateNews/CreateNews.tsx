import React from 'react';
import st from '../admin-component.module.scss';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAddNewsMutation, useUpdateNewsMutation } from '../../../store/Api';
import moment from 'moment';
import { baseurl } from '../../../constants/constants';
import type { CreateNewsProps } from '../../../types/typesProps';

const { TextArea } = Input;

export const CreateNews = (props: CreateNewsProps) => {
  const [addNews] = useAddNewsMutation();
  const [updateNews] = useUpdateNewsMutation();
  const [form] = Form.useForm();

  const propsUpload: UploadProps = {
    defaultFileList:
      props.chooseNews && props.chooseNews?.imgUrl !== null
        ? [
            {
              uid: '1',
              name: `${props.chooseNews?.imgUrl}`,
              status: 'done',
              url: `${baseurl}/${props.chooseNews?.imgUrl}`,
            },
          ]
        : [],
    listType: 'picture-card',
    beforeUpload: () => false,
  };

  React.useEffect(() => {
    form.setFieldValue('imgUrl', props.chooseNews?.imgUrl);
    form.setFieldValue('title', props.chooseNews?.title);
    form.setFieldValue('text', props.chooseNews?.text);
    form.setFieldValue('date', moment(props.chooseNews?.date));
  }, [props.chooseNews]);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('text', values.text);
    formData.append('date', values.date);
    values.imgUrl &&
      formData.append(
        'imgUrl',
        typeof values.imgUrl === 'string' ? values.imgUrl : values.imgUrl.file,
      );
    props.children === 'Создать новость'
      ? await addNews(formData).unwrap()
      : props.newsId && (await updateNews({ body: formData, id: props.newsId }).unwrap());

    form.resetFields();
    props.handleEdit && props.handleEdit(null);
  };

  return (
    <div className={st.create_form}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish} form={form}>
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
          <Upload {...propsUpload}>
            <div className={st.upload}>
              <PlusOutlined />
              <div>Загрузить файл</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item className={st.row_button}>
          <Button type="primary" htmlType="submit">
            {props.children}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
