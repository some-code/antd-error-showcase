import * as React from 'react';
import { Layout } from 'antd';
import Form from './form';

const { Header, Footer } = Layout;

// import { log } from './utils';

// 登录界面
interface IState {
  title: string;
  total: number;
}

class App extends React.Component<any, IState> {
  public state = {
    title: '1',
    total: 0,
  };
  constructor(props: any) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      title: 'hello'
    });
  }
  render() {
    return (
      <Layout className="page page-login">
        <Header>header</Header>
        <Layout>
          <Form />
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
