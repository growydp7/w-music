/*
 * @Author: growydp
 * @Date: 2023-11-01 10:56:54
 * @Description: 
 */
import React, { FC, useMemo } from 'react'
import { Flex, Avatar } from 'antd'

import { formatDate } from '../../../utils/date'
import styles from './item.module.scss'

interface IDynamic {
  user: {
    avatarUrl: string;
    nickname: string;
    avatarDetail?: {
      identityIconUrl?: string
    }
  },
  type: number;
  eventTime: number;
  json: string;
}

const Item: FC<IDynamic> = (props: IDynamic) => {



  const typeName = useMemo(() => {
    let name = ''
    switch(props.type) {
      case 13:
        name = '分享歌单'
        break;
      case 17:
        name = '分享电台节目'
        break;
      case 18:
        name = '分享单曲'
        break;
      case 19:
        name = '分享专辑'
        break;
      case 21:
        name = '分享视频'
        break;
      case 22:
        name = '转发'
        break;
      case 24:
        name = '分享专栏文章'
        break;
      case 28:
        name = '分享电台节目'
        break;
      case 35:
        name = '发布动态'
        break;
      case 39:
        name = '发布视频'
        break;
      default:
        name = '分享视频'
    }
    return name
  }, [props.type])

  const showMsg = useMemo(() => {
    const msgObj = JSON.parse(props.json)

    msgObj.msg = msgObj.msg.replace(/\n/g, '<br />')
    console.log(msgObj)
    return msgObj
  }, [props.json])

  return <div className='pt-4'>
    {/** dynamtic item header */}
    <Flex>
      <Avatar src={props.user.avatarUrl} size="large" />
      <div className='pl-2 text-xs'>
        <div className={styles.header}>
          <p><span className={styles.nickname}>{props.user.nickname}</span><span className='ml-2'>{typeName}</span></p>
          <p>{formatDate(props.eventTime)}</p>
        </div>

        {/** text */}
        {
          showMsg.msg && 
            <div className='mt-2' dangerouslySetInnerHTML={{ __html: showMsg.msg }}></div>
        }
        {props.type}


      </div>
    </Flex>
  </div>;
}
 
export default Item;