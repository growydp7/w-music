/*
 * @Author: growydp
 * @Date: 2023-10-27 17:55:09
 * @Description: square lists
 */

// type
// 1 正方形封面 标题 右上角播放量 hover右下角显示播放
// 2

import { FC, useMemo } from 'react'
import { Row, Col } from 'antd'
import SquareItem, { ISquareItem } from './item'

interface ISquare {
  lists: ISquareItem[];
  type: string | number;
}

const Square: FC<ISquare> = (props: ISquare) => {
  const { type } = props
  const layout = useMemo(() => ({ span: type == 1 ? 4 : 6 }), [type])
  return <div>
    <Row gutter={20}>
      {
        props.lists.map(item => <Col
          key={item.id}
          span={layout.span}
        >
          <SquareItem
            {...item}
            square={type}
          />
        </Col>)
      }
    </Row>
  </div>;
}
 
export default Square;
