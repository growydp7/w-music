/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-11-01 15:51:15
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-11-02 11:02:25
 * @FilePath: \ScreenMediaMobiled:\project\w-music\src\pages\User\Dynamics\item.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: growydp
 * @Date: 2023-11-01 10:56:54
 * @Description: 
 */
import { FC, useMemo } from 'react'
import { Flex, Avatar, Divider } from 'antd'
import { LikeOutlined, MessageOutlined, ExportOutlined } from '@ant-design/icons'

import { formatDate } from '../../../utils/date'
import styles from './item.module.scss'

import Song from './components/Song/song'
import ImageBlock from './components/ImageBlock'

interface IPics {
  pcSquareUrl: string;
}

interface IDynamic {
  user: {
    avatarUrl: string;
    nickname: string;
    avatarDetail?: {
      identityIconUrl?: string;
    }
  };
  info: {
    likedCount: number;
    shareCount: number;
    commentCount: number
  };
  type: number;
  eventTime: number;
  json: string;
  pics?: IPics[]
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
      case 57:
        name = '发布动态'
        break
      default:
        name = '分享视频'
    }
    return name
  }, [props.type])

  const showMsg = useMemo(() => {
    const msgObj = JSON.parse(props.json)

    msgObj.msg = msgObj.msg.replace(/\n/g, '<br />')
    msgObj._blockType = props.type
    console.log(msgObj)
    return msgObj
  }, [props.json])

  return <div className='pt-4'>
    {/** dynamtic item header */}
    <Flex>
      <Avatar src={props.user.avatarUrl} size="large" />
      <div className='pl-2 flex-1'>
        <div className={styles.header}>
          <p><span className={styles.nickname}>{props.user.nickname}</span><span className='ml-2'>{typeName}</span></p>
          <p>{formatDate(props.eventTime)}</p>
        </div>

        {/** text */}
        {
          showMsg.msg && 
            <div className='mt-2' dangerouslySetInnerHTML={{ __html: showMsg.msg }}></div>
        }

        {/** song album */}
        {
          [18,19].includes(props.type) &&
            <Song info={showMsg} />
        }

        {/** image */}
        {
          (props.pics && props.pics.length > 0) &&
            <ImageBlock lists={props.pics} />
        }

        {/** control */}
        <Flex className={`my-4 ${styles.control}`} justify="flex-end">
          <div>
            <LikeOutlined className={styles.icon} />
            {
              props.info.likedCount > 0 && <span className='ml-1'>({props.info.likedCount})</span>
            }
          </div>
          <div>
            <ExportOutlined className={styles.icon} />
            {
              props.info.shareCount > 0 && <span className='ml-1'>({props.info.shareCount})</span>
            }
          </div>
          <div>
            <MessageOutlined className={styles.icon} />
            {
              props.info.commentCount > 0 && <span className='ml-1'>({props.info.commentCount})</span>
            }
          </div>
        </Flex>
      </div>
    </Flex>
    <Divider className='my-0' />
  </div>;
}
 
export default Item;