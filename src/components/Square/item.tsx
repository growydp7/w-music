/*
 * @Author: growydp
 * @Date: 2023-10-27 18:01:51
 * @Description: 
 */

import { FC } from 'react';
import { Image, Typography } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

import styles from './item.module.scss'
import classNames from 'classnames';
export interface ISquareItem {
  id: number;
  picUrl: string;
  square?: string | number;
  name?: string;
  playCount?: number;
}
console.log(styles)
const { Paragraph} = Typography

const SquareItem: FC<ISquareItem> = (props: ISquareItem) => {
  const { picUrl, name, playCount, square } = props

  const classes = classNames(`absolute top-1 ${styles.count}`, square == 1 ? 'right-2' : `left-2 ${styles['special-count']}`)
  return <div className={`mb-7 ${styles.item} cursor-pointer`}>
    <div className='relative'>
      <Image
        src={picUrl}
        preview={false}
        className="align-top"
      />
      <div className={classes}>
        <PlayCircleOutlined />
        {
          square == 1 && <span className='ml-1 align-top'>{playCount}</span>
        }
      </div>
    </div>
    <Paragraph ellipsis={{ rows: 2 }} className='mt-0'>{name}</Paragraph>
  </div>;
}
 
export default SquareItem;