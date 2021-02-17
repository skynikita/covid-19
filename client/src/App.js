import React, {Component} from 'react';
import { Layout, Typography, Divider } from 'antd';
import 'antd/dist/antd.css';
import Cards from './components/Cards'
import Charts from './components/Charts'
import './App.css';

const { Header, Content, Footer } = Layout;
const { Text, Link,Title } = Typography;

const  App = () => (
   <Layout className="layout" style={{width:'100%', height:'100%'}}>
          <Header>
              <div style={{margin:'10px'}}  className="logo" />
              <Title level={2} type="success">Covid-19 Tracker</Title>
          </Header>
          <Content style={{ padding: '0 50px', margin: '16px 0' }}>
             <Cards />
              <Divider />
              <Charts />
          </Content>
          <Divider />
          <Footer style={{ textAlign: 'center' }}> Australia Covid-19 Tracker ©2021 Created by Yang Luo</Footer>
      </Layout>
)
export default App;
