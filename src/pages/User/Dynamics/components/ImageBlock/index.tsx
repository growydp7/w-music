import { FC } from 'react'
import { Image, Row, Col } from 'antd'

interface IPics {
  pcSquareUrl: string;
}
interface IInfo {
  info: IPics[]
}
const ImageBlock: FC<IInfo> = (props: IInfo) => {
  return <Row>
    {
      props.info.map(item)
    }
  </Row>
}
 
export default ImageBlock;