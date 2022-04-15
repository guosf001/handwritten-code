import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import { Navigation } from './Navigation';
import './style.css';

const LayoutContent = ({ children }) => {
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: '#ffffff' }}>
        <Navigation />
      </Header>
      <Content style={{ padding: '20px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2022 Created by erscheint</Footer>
    </Layout>
  );
};

export default LayoutContent;
