import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

interface IUser {
  key: number;
  name: string;
}

const columns: ColumnProps<IUser>[] = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data: IUser[] = [{
  key: 0,
  name: 'Jack',
}];

class UserTable extends Table<IUser> {}

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="page page-system">
        <h1>角色管理</h1>
        <UserTable columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default App;

