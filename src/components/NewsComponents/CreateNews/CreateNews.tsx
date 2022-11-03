import React from 'react';
import st from './create-news.module.scss';
import { Form, Input, Button, DatePicker, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAddNewsMutation, useUpdateNewsMutation } from '../../../store/Api/NewsApi';
import moment from 'moment';
import { baseurl } from '../../../BlockData/constants';

const { TextArea } = Input;

interface TProps {
  newsId?: string | null;
  chooseNews?: { id: string; title: string; text: string; date: string; imgUrl: object };
  children: string;
  handleEdit?: (id: string | null) => void;
}

const CreateNews = (props: TProps) => {
  const [addNews] = useAddNewsMutation();
  const [updateNews] = useUpdateNewsMutation();
  const [form] = Form.useForm();

  const propsUpload: UploadProps = {
    defaultFileList: props.chooseNews?.imgUrl
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
    if (props.chooseNews) {
      if (props.chooseNews?.imgUrl !== null || undefined) {
        form.setFieldValue(
          'imgUrl',
          (propsUpload.defaultFileList = [
            {
              uid: '1',
              name: `${props.chooseNews?.imgUrl}`,
              status: 'done',
              url: `${baseurl}/${props.chooseNews?.imgUrl}`,
            },
          ]),
        );
      }

      form.setFieldValue('title', props.chooseNews?.title);
      form.setFieldValue('text', props.chooseNews?.text);
      form.setFieldValue('date', moment(props.chooseNews?.date));
    }
  }, [props.chooseNews]);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('text', values.text);
    formData.append('date', values.date);
    values.imgUrl && formData.append('imgUrl', values.imgUrl.file);

    props.children === 'Создать новость'
      ? await addNews(formData).unwrap()
      : await updateNews({ body: formData, id: props.newsId }).unwrap();

    form.resetFields();
    props.handleEdit && props.handleEdit(null);
  };

  return (
    <div className={st.news_form}>
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

export default CreateNews;
