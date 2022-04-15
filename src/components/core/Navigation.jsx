import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import { FormOutlined, HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function useActive(current, path) {
  return current === path ? 'ant-menu-item-selected' : '';
}
export const Navigation = () => {
  const router = useSelector((state) => state.router);
  const pathname = router.location.pathname;
  const isHome = useActive(pathname, '/');
  const isWritten = useActive(pathname, '/written');

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item key="1" className={isHome} icon={<HomeFilled />}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="2" className={isWritten} icon={<FormOutlined />}>
        <Link to="/written">222</Link>
      </Menu.Item>
    </Menu>
  );
};
