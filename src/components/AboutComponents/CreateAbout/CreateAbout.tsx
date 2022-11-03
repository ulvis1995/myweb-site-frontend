import React from 'react';
import st from './create-about.module.scss';
import { Form, Input, Button, Select } from 'antd';
import { useAddAboutMutation, useUpdateAboutMutation } from '../../../store/Api/AboutApi';
import { useGetTypeAboutQuery } from '../../../store/Api/TypeApi';

const { TextArea } = Input;

interface TProps {
  aboutId?: string | null;
  chooseAbout?: { id: string; text: string; type: { id: string; title: string } };
  children: string;
  handleEdit?: (id: string | null) => void;
}

const CreateAbout = (props: TProps) => {
  const [addAbout] = useAddAboutMutation();
  const [updateAbout] = useUpdateAboutMutation();
  const [form] = Form.useForm();
  const { data } = useGetTypeAboutQuery('');

  React.useEffect(() => {
    console.log(props.chooseAbout);
    if (props.chooseAbout) {
      form.setFieldValue('text', props.chooseAbout?.text);
      form.setFieldValue('type', props.chooseAbout?.type.title);
    }
  }, [props.chooseAbout]);

  const onFinish = async (values: any) => {
    props.children === 'Добавить информацию'
      ? await addAbout(values).unwrap()
      : await updateAbout({ body: values, id: props.aboutId }).unwrap();
    form.resetFields(['text', 'type']);
    props.handleEdit && props.handleEdit(null);
    console.log(values);
  };

  return (
    <div className={st.about_form}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish} form={form}>
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
            {data?.map((type: any) => (
              <Select.Option value={type.id} key={type.id}>
                {type.title}
              </Select.Option>
            ))}
          </Select>
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

export default CreateAbout;
