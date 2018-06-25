import * as React from 'react';
import { Link } from '@reach/router';
import './header.less';
import {
  Layout, Menu, Icon, Input, Dropdown, Avatar, Badge, Popover, Tabs, Spin
} from 'antd';

const { Header } = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

// 个人信息下拉组件
const DropMenus = (props?: any) => {
  return (
    <Menu>
      <Menu.Item key="center"><Icon type="user" />个人中心</Menu.Item>
      <Menu.Item key="clean"><Icon type="user" />清除缓存</Menu.Item>
      <div className="menu-divider"></div>
      <Menu.Item key="logout">
        <Icon type="logout" />登出
      </Menu.Item>
    </Menu>
  );
};

const NoticeTabs = (props?: any) => {
  return (
    <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
        {
          props.loading ? <div className="spin-wrapper"><Spin /></div> :
          props.news.map((i: string) => {
            return <span key={i}>{i}</span>;
          })
        }
      </TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
  );
};

// 通知下拉组件
class Notice extends React.Component<any, any> {
  public state = {
    loading: true,
    news: [
      '通知一',
      '通知二',
      '通知三',
    ]
  };
  constructor(props: any) {
    super(props);
  }
  getData() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1000);
  }
  onDisplay(visible: boolean) {
    if (!visible) {
      return this.setState({loading: true});
    }
    this.getData();
  }
  render() {
    return (
      <Popover content={ <NoticeTabs {...this.state} /> } trigger="click" onVisibleChange={ this.onDisplay.bind(this) }>
        <Badge count={5}>
          <Icon type="bell" />
        </Badge>
      </Popover>
    );
  }
}

class App extends React.Component<any, any> {
  render() {
    return (
      <Header className="layout-head flex flex-pack-justify">
        <Link to="/">首页</Link>
        <div className="flex">

          <div className="header-item">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 300 }}
            />
          </div>

          <div className="header-item">运维系统</div>

          <div className="header-item">
            <Notice />
          </div>

          <div className="header-item">
            <Dropdown overlay={DropMenus()}>
              <span className="header-user flex flex-align-center">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span>admin</span>
              </span>
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}

export default App;

