import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '@/components/core/Layout';

const Home = () => {
  const state = useSelector((state) => state);
  console.log('state :>> ', state);
  return <Layout>Home</Layout>;
};

export default Home;
