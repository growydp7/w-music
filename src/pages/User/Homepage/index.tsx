/*
 * @Author: growydp
 * @Date: 2023-10-30 12:23:24
 * @Description: user center
 * 
 * todo: 歌手页
 * 社交网络
 */


import React, { useState, useMemo } from 'react'
import { Avatar, Row, Col, Typography, Image, Button, Divider, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'
import styles from './Homepage.module.scss'
import cityLists from '../../../assets/city.json'
import { PlusOutlined, MessageOutlined, ManOutlined, WomanOutlined} from '@ant-design/icons'

interface IUserInfo {
  level: number;
  profile: {
    avatarUrl: string;
    nickname: string;
    province: number;
    city: number;
    eventCount: number;
    follows: number;
    followeds: number;
    gender: number;
    signature?: string;
  },
  identify?: {
    imageUrl: string;
    imageDesc: string;
  }
}

interface IVipInfo {
  redVipDynamicIconUrl: string;
}

type StringType<T> = {
  [K in keyof T]: string;
} 
const { Title } = Typography
const rawInfo = {"identify":{"imageUrl":"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png","imageDesc":"网易音乐人、歌手、作词、作曲","actionUrl":null},"level":10,"listenSongs":27719,"userPoint":{"userId":1640545120,"balance":22678,"updateTime":1698804635627,"version":10,"status":1,"blockBalance":0},"mobileSign":true,"pcSign":true,"profile":{"privacyItemUnlimit":{"area":true,"college":true,"gender":true,"age":true,"villageAge":true},"avatarDetail":{"userType":null,"identityLevel":1,"identityIconUrl":"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"},"avatarImgId":109951168121638400,"birthday":979228800000,"gender":1,"nickname":"柚子不会说唱","defaultAvatar":false,"avatarUrl":"http://p1.music.126.net/PJ2RutVIGrtsgrYAzypl8A==/109951168121638404.jpg","backgroundImgId":109951164204224500,"backgroundUrl":"http://p1.music.126.net/XzJI5gF75J2T3ql1-bnJPw==/109951164204224495.jpg","userType":4,"mutual":false,"province":130000,"city":130600,"followed":false,"accountStatus":0,"djStatus":10,"vipType":11,"remarkName":null,"authStatus":1,"detailDescription":"","experts":{},"expertTags":null,"backgroundImgIdStr":"109951164204224495","avatarImgIdStr":"109951168121638404","description":"","createTime":1539606620034,"userId":1640545120,"signature":"淘金者","authority":0,"allAuthTypes":[{"type":4,"desc":"网易音乐人","tags":["歌手","作词","作曲"]},{"type":400,"desc":"","tags":null}],"followeds":15703,"follows":0,"blacklist":false,"artistId":33239051,"eventCount":21,"allSubscribedCount":0,"playlistBeSubscribedCount":30,"mainAuthType":{"type":4,"desc":"网易音乐人","tags":["歌手","作词","作曲"]},"followTime":null,"followMe":false,"artistIdentity":[3,4],"cCount":0,"inBlacklist":false,"sDJPCount":0,"artistName":"柚","playlistCount":2,"sCount":0,"newFollows":0},"peopleCanSeeMyPlayRecord":true,"bindings":[{"expiresIn":2147483647,"refreshTime":1539606555,"bindingTime":1539606555243,"tokenJsonStr":null,"url":"","expired":false,"userId":1640545120,"id":6700059999,"type":1},{"expiresIn":7776000,"refreshTime":1621000232,"bindingTime":1539606531801,"tokenJsonStr":null,"url":"","expired":true,"userId":1640545120,"id":6700070916,"type":5},{"expiresIn":7200,"refreshTime":1689787585,"bindingTime":1539606806626,"tokenJsonStr":null,"url":"","expired":true,"userId":1640545120,"id":6700069980,"type":10}],"adValid":false,"code":200,"newUser":false,"recallUser":false,"createTime":1539606620034,"createDays":1843,"villageCard":{"type":"VILLAGE_CARD","name":"村民证","privacyKey":"villageIDCard","imageUrl":"","targetUrl":"","villageCardTabExtensionVO":{"encodedUserId":"573D6CC325996B0596A91C5FCD6CD374","received":true,"isSelf":false,"url":"https://sg.music.163.com/g/cloud-card/result?fromNative=1&skipAni=1&full_screen=true&signUserId=573D6CC325996B0596A91C5FCD6CD374","lastedUrl":null,"lastedReceived":null,"backgroundPic":null,"hasPlayedV1":true,"hasPlayedV2":false,"encodedUserIdV2":"1EEAC6B048BFB84D17F08FD40082EF5F","urlV2":"https://sg.music.163.com/g/cloud-card-2?nm_style=sbt&market=personal"}},"profileVillageInfo":{"title":"领取村民证","imageUrl":null,"targetUrl":"https://sg.music.163.com/g/cloud-card-2?nm_style=sbt&market=personal"}}
const rawVipInfo = {"redVipAnnualCount":-1,"redVipLevelIcon":"http://p5.music.126.net/obj/wovDmcKXw6PCn2_CmsOk/18223326991/9aa2/a564/9ef9/0f0f58557d21b753a7be488c76f71da7.png","redVipDynamicIconUrl":"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4417174727/92fe/d574/3f90/5a848e3068b16fafac6b6c5138457f80.png","redVipDynamicIconUrl2":"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4417174711/9059/7438/6172/f76a033b0fd015218bf1d9fb6b96cd5b.png","redVipLevel":5}
const Homepage = () => {
  const [info, setInfo] = useState<IUserInfo>(rawInfo)
  const [vipInfo, setVipInfo] = useState(rawVipInfo)
  const detail = useMemo(() => {
    const results = []
    if (info.profile.province) {
      const provinceObj = cityLists.filter(province => province.id === info.profile.province)[0]
      let str = provinceObj.name
      if (info.profile.city) {
        str += ` ${(provinceObj.cities as any)[info.profile.city]}`
      }
      results.push({
        key: '1',
        label: '所在地区',
        children: str
      })
    }
    // todo 社交网络
    if (info.profile.signature) {
      results.push({
        key: '3',
        label: '个人介绍',
        children: info.profile.signature
      })
    }
    return results
  }, [info])

  return <div className='px-7'>
    {/** 用户中心 header */}
    <Row gutter={20}>
      <Col span={5} className='text-center'>
        <Avatar size={220} src={info.profile.avatarUrl} />
      </Col>
      <Col span={19}>
        <Title level={4}>{info.profile.nickname}</Title>
        <Row justify="space-between">
          <Col className='items-center flex'>
            <Image src={vipInfo.redVipDynamicIconUrl2} preview={false} height="17px" />
            {
              info.identify &&
                <p className={styles.desc}>
                  <img src={info.identify.imageUrl} />
                  <span>{info.identify.imageDesc}</span>
                </p>
            }
            <span className={styles.level}>Lv{info.level}</span>
            {
              info.profile.gender &&
                info.profile.gender === 1 ? <ManOutlined style={{ color: '#26a6e4' }} className='ml-1' /> : <WomanOutlined style={{ color: '#ffb5d3' }} className='ml-1' />
            }
          </Col>
          <Col>
            <Button shape="round" size="small" className='text-xs' icon={<MessageOutlined />}>发私信</Button>
            <Button shape="round" size="small" className='text-xs ml-1' icon={<PlusOutlined />}>关注</Button>
          </Col>
        </Row>
        <Divider className='my-3' style={{ borderColor: '#E5E5E5' }} />
        <Row>
          <Col span={2} className='text-center'>
            <p className='text-xl'>{info.profile.eventCount}</p>
            <p className='text-xs text-gray-500'>动态</p>
          </Col>
          <Col span={2} className='text-center'>
            <p className='text-xl'>{info.profile.follows}</p>
            <p className='text-xs text-gray-500'>关注</p>
          </Col>
          <Col span={2} className='text-center'>
            <p className='text-xl'>{info.profile.followeds}</p>
            <p className='text-xs text-gray-500'>粉丝</p>
          </Col>
        </Row>
        <Descriptions items={detail} column={1} size="small" className='mt-2' contentStyle={{ fontSize: '12px' }} labelStyle={{ fontSize: '12px' }} />
      </Col>
    </Row>
  </div>;
}
 
export default Homepage;