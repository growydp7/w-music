/*
 * @Author: growydp
 * @Date: 2023-10-27 10:44:08
 * @Description: 
 */
import { useRef } from 'react'
import { useSize } from 'ahooks'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Sidebar from './components/Sidebar'
import Player from '../components/Player'

const GlobalLayout = () => {
  const { Header, Sider, Content, Footer } = Layout
  const ref = useRef(null)
  const size = useSize(ref)
  return <div ref={ref}>
    <Layout className='h-screen'>
      <Layout>
        <Sider style={{ backgroundColor: '#ededed' }}><Sidebar /></Sider>
        <Layout>

        <Header style={{ backgroundColor: '#f9f9f9', height: '50px' }}>Header</Header>
        <Content style={{ backgroundColor: '#ffffff', height: size?.height + 'px' }} className='overflow-scroll'><Outlet /></Content>
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