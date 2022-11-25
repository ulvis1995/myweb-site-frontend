import React from 'react';
import st from '../admin-component.module.scss';
import { Form, Input, Button, Upload, Checkbox, Select } from 'antd';
import type { UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { typeApi, useAddPortfolioMutation, useUpdatePortfolioMutation } from '../../../store/Api';
import { baseurl } from '../../../constants/constants';
import { CreatePortfolioProps } from '../../../types/typesProps';

const { TextArea } = Input;

export const CreatePortfolio = (props: CreatePortfolioProps) => {
  const [form] = Form.useForm();
  const [addProject] = useAddPortfolioMutation();
  const [updateProject] = useUpdatePortfolioMutation();
  const { typeProject } = typeApi.useGetTypeProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({ typeProject: data ?? [] }),
  });

  const propsUpload: UploadProps = {
    defaultFileList: props.chooseProject?.imgUrl
      ? [
          {
            uid: '1',
            name: `${props.chooseProject?.imgUrl}`,
            status: 'done',
            url: `${baseurl}/${props.chooseProject?.imgUrl}`,
          },
        ]
      : [],
    listType: 'picture-card',
    beforeUpload: () => false,
  };

  React.useEffect(() => {
    form.setFieldValue('imgUrl', `${props.chooseProject?.imgUrl}`);
    form.setFieldValue('name', props.chooseProject?.name);
    form.setFieldValue('deploy', props.chooseProject?.deploy);
    form.setFieldValue('description', props.chooseProject?.description);
    form.setFieldValue('gitUrl', props.chooseProject?.gitUrl);
    form.setFieldValue('type_project_id', props.chooseProject?.type?.id);
    form.setFieldValue('is_best_work', props.chooseProject?.is_best_work);
    form.setFieldValue('technology', props.chooseProject?.technology.join(','));
  }, [props.chooseProject]);

  const onFinish = async (values: any) => {
    if (values.imgUrl === 'undefined' || undefined) {
      alert('Добавьте изображение');
    } else {
      const formData = new FormData();
      formData.append('deploy', values.deploy ? values.deploy : '');
      formData.append('description', values.description);
      formData.append('gitUrl', values.gitUrl);
      formData.append('name', values.name);
      formData.append('technology', values.technology);
      formData.append('type_project_id', values.type_project_id);
      formData.append('is_best_work', values.is_best_work ? values.is_best_work : false);
      formData.append('imgUrl', values.imgUrl.file);
      props.children === 'Добавить в портфолио'
        ? await addProject(formData).unwrap()
        : props.portfolioId &&
          (await updateProject({ body: formData, id: props.portfolioId }).unwrap());

      form.resetFields();
      props.handleEdit && props.handleEdit(null);
    }
  };

  return (
    <div className={st.create_form}>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish} form={form}>
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
          <Upload {...propsUpload}>
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
          name="type_project_id">
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
            {props.children}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
