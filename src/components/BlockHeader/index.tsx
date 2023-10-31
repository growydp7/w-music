/*
 * @Author: growydp
 * @Date: 2023-10-27 12:25:16
 * @Description: Block header
 */
import { FC } from 'react'
import { Typography } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

interface IBlockHeader {
  title: string;
  path?: string;
}

const { Title } = Typography

const BlockHeader: FC<IBlockHeader> = (props: IBlockHeader) => {
  const { title, path } = props
  const navigate = useNavigate()

  const handleClick = () => {
    if (!path) return
    navigate(path)
  }

  const classes = classNames('my-0', `cursor-${path ? 'pointer' : 'default'}`)
  return <div className='flex mb-3'>
    <div className='flex' onClick={handleClick}>
      <Title level={5} className={classes}>{title}</Title>
      {
        path && <RightOutlined className='cursor-pointer' />
      }
    </div>
  </div>;
}
 
export default BlockHeader;