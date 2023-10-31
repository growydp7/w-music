/*
 * @Author: growydp
 * @Date: 2023-10-27 10:44:08
 * @Description: 
 */
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Sidebar from './components/Sidebar'
import Player from '../components/Player'

const GlobalLayout = () => {
  const { Header, Sider, Content, Footer } = Layout
  return <div>
    <Layout className='h-screen'>
      <Layout>
        <Sider style={{ backgroundColor: '#ededed' }}><Sidebar /></Sider>
        <Layout>

        <Header style={{ backgroundColor: '#f9f9f9', height: '50px' }}>Header</Header>
        <Content style={{ backgroundColor: '#ffffff' }}><Outlet /></Content>
        </Layout>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>


    {/* <Sidebar />
    <div className='px-3'>
      <Outlet />
    </div>
    <Player /> */}
  </div>;
}
 
export default GlobalLayout;