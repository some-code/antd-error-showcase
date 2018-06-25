import * as React from 'react';
import { navigate } from '@reach/router';
import {
  Form,
  Icon,
  Input,
  Button,
} from 'antd';
import './login.less';

const FormItem = Form.Item;

// 登录界面
interface IState {
  username: string;
  password: string;
}

const Item = (props: any) => {
  const { name, rules, icon, type, placeholder, cb } = props;
  return (
    <FormItem>
      {cb(name, {rules})(
        <Input type={type} placeholder={placeholder} prefix={<Icon type={icon} />}/>
      )}
    </FormItem>
  );
};

class PureForm extends React.Component<any, IState> {
  public state = {
    username: '',
    password: '',
  };
  protected rules: any[] = [
    {
      name: 'username',
      rules: [{ required: true, message: '请填写用户名!' }],
      icon: 'user',
      type: 'text',
      placeholder: '用户名'
    },
    {
      name: 'password',
      rules: [{ required: true, message: '请填写密码!' }],
      icon: 'lock',
      type: 'password',
      placeholder: '密码'
    },
  ];
  constructor(props: any) {
    super(props);
    const { getFieldDecorator } = this.props.form;
    this.rules = this.rules.map(item => { item.cb = getFieldDecorator; return item; });
  }
  handleSubmit(e: MouseEvent): void {
    e.preventDefault();
    this.props.form.validateFields((err: boolean, values: any[]) => {
      if (!err) {
        navigate('/');
      }
    });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        {
          this.rules.map(item => <Item {...item} key={item.name}/>)
        }
        <FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(PureForm);

export default WrappedNormalLoginForm;
