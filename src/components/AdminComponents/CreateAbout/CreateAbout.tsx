import React from 'react';
import st from '../admin-component.module.scss';
import { Form, Input, Button, Select } from 'antd';
import type { CreateAboutProps } from '../../../types/typesProps';
import { typeApi, useAddAboutMutation, useUpdateAboutMutation } from '../../../store/Api';

const { TextArea } = Input;

export const CreateAbout = (props: CreateAboutProps) => {
  const [form] = Form.useForm();
  const [addAbout] = useAddAboutMutation();
  const [updateAbout] = useUpdateAboutMutation();
  const { typeAbout } = typeApi.useGetTypeAboutQuery(undefined, {
    selectFromResult: ({ data }) => ({ typeAbout: data ?? [] }),
  });

  React.useEffect(() => {
    if (props.chooseAbout) {
      form.setFieldValue('text', props.chooseAbout?.text);
      form.setFieldValue('type', props.chooseAbout?.type?.id);
    }
  }, [props.chooseAbout]);

  const onFinish = async (values: any) => {
    props.children === 'Добавить информацию'
      ? await addAbout(values).unwrap()
      : props.aboutId && (await updateAbout({ body: values, id: props.aboutId }).unwrap());
    form.resetFields(['text', 'type']);
    props.handleEdit && props.handleEdit(null);
  };

  return (
    <div className={st.create_form}>
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
            {typeAbout?.map((type) => (
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
