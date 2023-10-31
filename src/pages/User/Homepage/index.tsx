/*
 * @Author: growydp
 * @Date: 2023-10-30 12:23:24
 * @Description: user center
 */


import React, { useState } from 'react'
import { Avatar, Row, Col, Typography, Image, Button, Divider } from 'antd'
import styles from './Homepage.module.scss'
import { PlusOutlined, MessageOutlined, ManOutlined, WomanOutlined} from '@ant-design/icons'

interface IUserInfo {
  profile: {
    avatarUrl: string;
    nickname: string;
  }
}

interface IVipInfo {
  redVipDynamicIconUrl: string;
}
const { Title } = Typography
const rawInfo = {"level":8,"listenSongs":7384,"userPoint":{"userId":292775983,"balance":144,"updateTime":1698737491470,"version":10,"status":0,"blockBalance":0},"mobileSign":false,"pcSign":false,"profile":{"privacyItemUnlimit":{"area":true,"college":true,"gender":true,"age":true,"villageAge":true},"avatarDetail":null,"avatarUrl":"http://p1.music.126.net/Xk1gHSk1X7Gc_gnqr9D1Xg==/109951168996561500.jpg","avatarImgId":109951168996561500,"birthday":-1577952000000,"gender":1,"nickname":"wangli_49","createTime":1496878932600,"avatarImgIdStr":"109951168996561500","backgroundImgIdStr":"19218363742136973","vipType":11,"mutual":false,"followed":false,"remarkName":null,"authStatus":0,"detailDescription":"","experts":{},"expertTags":null,"djStatus":10,"province":1000000,"city":1010000,"accountStatus":0,"userType":0,"defaultAvatar":false,"backgroundImgId":19218363742136972,"backgroundUrl":"http://p1.music.126.net/4ufU6RFaG2Yr1Uw8XP3P8Q==/19218363742136973.jpg","description":"","userId":292775983,"signature":"","authority":0,"followeds":4,"follows":2,"blacklist":false,"eventCount":0,"allSubscribedCount":0,"playlistBeSubscribedCount":0,"followTime":null,"followMe":false,"artistIdentity":[],"cCount":0,"inBlacklist":false,"sDJPCount":0,"playlistCount":3,"sCount":0,"newFollows":2},"peopleCanSeeMyPlayRecord":true,"bindings":[{"expiresIn":2147483647,"refreshTime":1610953874,"bindingTime":1610953874437,"tokenJsonStr":null,"url":"","expired":false,"userId":292775983,"id":11163405488,"type":1},{"expiresIn":7200,"refreshTime":1698647606,"bindingTime":1667401411728,"tokenJsonStr":null,"url":"","expired":true,"userId":292775983,"id":13648924930,"type":10}],"adValid":false,"code":200,"newUser":false,"recallUser":false,"createTime":1496878932600,"createDays":2337,"villageCard":{"type":"VILLAGE_CARD","name":"村民证","privacyKey":"villageIDCard","imageUrl":"","targetUrl":"","villageCardTabExtensionVO":{"encodedUserId":"AA6CFAC7AA4E9ABAFA80696E7EB74B99","received":true,"isSelf":false,"url":"https://sg.music.163.com/g/cloud-card/result?fromNative=1&skipAni=1&full_screen=true&signUserId=AA6CFAC7AA4E9ABAFA80696E7EB74B99","lastedUrl":null,"lastedReceived":null,"backgroundPic":null,"hasPlayedV1":true,"hasPlayedV2":false,"encodedUserIdV2":"47766B2036A71E31032BAE48C6200F1A","urlV2":"https://sg.music.163.com/g/cloud-card-2?nm_style=sbt&market=personal"}},"profileVillageInfo":{"title":"领取村民证","imageUrl":null,"targetUrl":"https://sg.music.163.com/g/cloud-card-2?nm_style=sbt&market=personal"}}
const rawVipInfo = {"redVipAnnualCount":-1,"redVipLevelIcon":"http://p5.music.126.net/obj/wovDmcKXw6PCn2_CmsOk/18223326991/9aa2/a564/9ef9/0f0f58557d21b753a7be488c76f71da7.png","redVipDynamicIconUrl":"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4417174727/92fe/d574/3f90/5a848e3068b16fafac6b6c5138457f80.png","redVipDynamicIconUrl2":"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4417174711/9059/7438/6172/f76a033b0fd015218bf1d9fb6b96cd5b.png","redVipLevel":5}
const Homepage = () => {
  const [info, setInfo] = useState(rawInfo)
  const [vipInfo, setVipInfo] = useState(rawVipInfo)
  return <div className='px-7 py-4'>
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
      </Col>
    </Row>
  </div>;
}
 
export default Homepage;