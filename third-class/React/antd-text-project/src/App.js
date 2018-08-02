import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import {
  Home,
  List,
  Detail
} from './pages'
import './App.css';
const { Header, Content, Footer, Sider  } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    collapsed: false,
    current: 'mail',
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          breakpoint="lg"
        >
          <div className="logo">
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
             <span className="text">Use</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="/home">
              <Link to="/home">
                <Icon type="pie-chart" />
                <span>首页</span>
              </Link>
              </Menu.Item>       
            <Menu.Item key="/list" onClick={(item)=>{
                  this.props.history.push(item.key)
            }} >
              <Icon type="desktop" />
              <span>详情页</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <div className="layHeader">
          <Header style={{ background: '#fff', padding: 0 }}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />Navigation One
        </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="appstore" />Navigation Two
        </Menu.Item>
              <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>
          </Header>
          </div>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Switch>
                <Redirect exact to="/home" from="/"></Redirect>
                    <Route path="/home" component={Home}></Route>
                    <Route exact path="/list" component={List}></Route>
                    <Route path="/list/detail/:id" component={Detail}></Route>
                </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
  }


export default App;
