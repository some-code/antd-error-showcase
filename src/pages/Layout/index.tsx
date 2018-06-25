import * as React from 'react';
import { Link } from '@reach/router';
import './layout.less';
import {
  Layout, Menu, Icon
} from 'antd';
import Header from './header';

const { Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component<any, any> {
  render() {
    return (
      <Layout className="page page-layout">
        <Header />
        <Layout>
          <Sider>
            <Menu className="layout-menu" mode="inline">
              <SubMenu key="system" title={<span><Icon type="mail" /><span>系统</span></span>}>
                <Menu.Item key="order">
                  <Link to="/system">订单</Link>
                </Menu.Item>
                <Menu.Item key="setting">
                  <Link to="/setting">设置</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="user" title={<span><Icon type="user" /><span>用户</span></span>}>
                <Menu.Item key="role">
                  <Link to="/role">角色</Link>
                </Menu.Item>
                <Menu.Item key="auth">
                  <Link to="/auth">权限</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;

