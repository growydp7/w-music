/*
 * @Author: growydp
 * @Date: 2023-11-01 10:39:13
 * @Description: user dynamics
 */

import React, { useState } from 'react'
import Item from './item'
import raw from './raw.json'

const Dynamics = () => {
  const [lists, setLists] = useState(raw)
  return <div className='px-7 py-4'>
    {
      lists.map(dynamicItem => <Item key={dynamicItem.id} {...dynamicItem} />)
    }
  </div>;
}
 
export default Dynamics;