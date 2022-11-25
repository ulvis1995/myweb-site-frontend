import React from 'react';
import st from './auth.module.scss';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUserLogin, loginAdmin } from '../../store/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../app/AppRouter';

export const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, error } = useAppSelector(({ user }) => user);

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(fetchUserLogin(values));
  };

  React.useEffect(() => {
    if (user.role === 'ADMIN' && error === undefined) {
      dispatch(loginAdmin(true));
      navigate(`/${paths.ADMIN}`);
    }
  }, [user, error]);

  return (
    <div className="wrapper">
      <div className={st.container}>
        <h2>Авторизация</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Пожалуйста введите email' }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Введите ваш email..."
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста введите пароль' }]}
            help={error}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Введите ваш пароль..."
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
