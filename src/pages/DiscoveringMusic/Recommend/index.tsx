/*
 * @Author: growydp
 * @Date: 2023-10-27 12:07:40
 * @Description: 
 */
import { useState } from 'react'

import BlockHeader from '../../../components/BlockHeader';
import Square from '../../../components/Square';

const Recommend = () => {
  // 今日推荐
  const [sheetLists, setSheetLists] = useState([{"id":8428097720,"type":0,"name":"久听不厌 那些好听到耳朵怀孕的粤语歌","copywriter":"","picUrl":"https://p1.music.126.net/y3pbEh78MaNenDqyflmHhg==/109951168666215044.jpg","canDislike":true,"trackNumberUpdateTime":1698145648306,"playCount":2000723,"trackCount":102,"highQuality":false,"alg":"bytrack_profile_ol"},{"id":7452495240,"type":0,"name":"粤语 | 那些好听到爆了的粤语歌","copywriter":"","picUrl":"https://p1.music.126.net/gnNMFlLzmq3WW1XmHzZmiA==/109951167486107183.jpg","canDislike":true,"trackNumberUpdateTime":1698469846178,"playCount":13029355,"trackCount":146,"highQuality":false,"alg":"bytrack_profile_ol"},{"id":443797814,"type":0,"name":"超好听の二次元日文歌","copywriter":"","picUrl":"https://p1.music.126.net/Yn8-GCMLZJ-NbwSM8Yj6lw==/109951162972995997.jpg","canDislike":true,"trackNumberUpdateTime":1695793726479,"playCount":33902540,"trackCount":376,"highQuality":false,"alg":"bysong_profile_ol"},{"id":2459826936,"type":0,"name":"粤语经典老歌【好听到发疯，一次爱够】","copywriter":"","picUrl":"https://p1.music.126.net/GZSmdN2cp9EQKtR5bASHAg==/109951163823081004.jpg","canDislike":true,"trackNumberUpdateTime":1572313958130,"playCount":31778776,"trackCount":198,"highQuality":false,"alg":"bysong_profile_ol"},{"id":2212881778,"type":0,"name":"【恋爱日语系列】甜味满满的日语小情歌","copywriter":"","picUrl":"https://p1.music.126.net/y1Ht57BcmD6tsT88Zp5_Ag==/109951166467840356.jpg","canDislike":true,"trackNumberUpdateTime":1696577982073,"playCount":2964868,"trackCount":66,"highQuality":false,"alg":"bysong_profile_ol"},{"id":872823430,"type":0,"name":"好听不腻的日语歌单","copywriter":"","picUrl":"https://p1.music.126.net/PhSeQnR884ZEzfPxrfFh8A==/19216164718926608.jpg","canDislike":true,"trackNumberUpdateTime":1675395295300,"playCount":7010448,"trackCount":76,"highQuality":false,"alg":"bysong_profile_ol"},{"id":8530929153,"type":0,"name":"23年上半年新增破亿日语单曲","copywriter":"","picUrl":"https://p1.music.126.net/j09KR0X6pnJ1NNelc0_iqA==/109951168717998926.jpg","canDislike":true,"trackNumberUpdateTime":1688552863896,"playCount":545889,"trackCount":27,"highQuality":false,"alg":"bysong_profile_ol"},{"id":2703160070,"type":0,"name":"[日文] 耳熟能详的日文歌曲和翻唱合集","copywriter":"","picUrl":"https://p1.music.126.net/HqaUSSKM-NF89qwUDq064Q==/109951167809657432.jpg","canDislike":true,"trackNumberUpdateTime":1696585069018,"playCount":1063425,"trackCount":88,"highQuality":false,"alg":"bysong_profile_ol"},{"id":368254901,"type":0,"name":"经典回顾：怀旧粤语经典老歌 ","copywriter":"","picUrl":"https://p1.music.126.net/FoVW5QrQuvNO1pWizSiMVA==/109951166487521356.jpg","canDislike":true,"trackNumberUpdateTime":1685194868386,"playCount":15904456,"trackCount":329,"highQuality":false,"alg":"bysong_profile_ol"}])
  // 独家放送
  const [personal, setPersonal] = useState([{"id":14514232,"url":"","picUrl":"https://p1.music.126.net/ZfQoqzo0rTqe3sFKkDnGuw==/109951167211930348.jpg","sPicUrl":"https://p2.music.126.net/xLa1qgy1Mu3wRXFZ3GNLiA==/109951167211942016.jpg","type":5,"copywriter":"《超级面对面》第254期 keshi：我的音乐永远新鲜","name":"《超级面对面》第254期 keshi：我的音乐永远新鲜","time":1648546294107},{"id":14502289,"url":"","picUrl":"https://p2.music.126.net/11GImNvQQkOYFeQsReyyMQ==/109951167063057575.jpg","sPicUrl":"https://p2.music.126.net/72JkTBTmLllSenSlQYaO7Q==/109951167063050731.jpg","type":5,"copywriter":"《超级面对面》第253期 Charlie Puth：灵感就在开关之间","name":"《超级面对面》第253期 Charlie Puth：灵感就在开关之间","time":1645107940262},{"id":14498287,"url":"","picUrl":"https://p2.music.126.net/bXBBCrVEKtMZCnAwA8bnXQ==/109951166995281428.jpg","sPicUrl":"https://p2.music.126.net/z_XrKvWDuk2Na6LniN3hGA==/109951166995281863.jpg","type":5,"copywriter":"惊喜呈现| 姜贞羽：热爱舞台上的每一个瞬间","name":"惊喜呈现| 姜贞羽：热爱舞台上的每一个瞬间","time":1643443660577},{"id":14495768,"url":"","picUrl":"https://p2.music.126.net/quOJOo3nZ984XzHQYxoJ0w==/109951166983027523.jpg","sPicUrl":"https://p2.music.126.net/7LVq4AnJCMPrMhN-PYP28A==/109951166983028013.jpg","type":5,"copywriter":"惊喜呈现：Yamy郭颖携手二手玫瑰玩转港味复古风","name":"惊喜呈现：Yamy郭颖携手二手玫瑰玩转港味复古风","time":1643188917119}])

  return <div>
    {/** 推荐歌单 */}
    <BlockHeader title="推荐歌单" path="/discovering-music/song-sheet" />
    <Square lists={sheetLists} type="1" />

    {/** 独家放送 */}
    <BlockHeader title="独家放送" path="/discovering-music/song-sheet" />
    <Square lists={personal} type="2" />

    {/** 最新音乐 */}
    <BlockHeader title="最新音乐" path="/discovering-music/song-sheet" />
  </div>;
}
 
export default Recommend;