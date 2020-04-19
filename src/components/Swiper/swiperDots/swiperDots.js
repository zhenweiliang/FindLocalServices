import React from 'react'
import Style from './swiperDots.module.scss'

export default class SwiperDots extends React.Component {

  render () {
    const { index, qty } = this.props
    const arr = []
    for (let i = 0; i < qty; i++) {
      arr.push(i)
    }

    return (<ul className={Style.swiperSwitch}>
      {arr.map(item =>
        (<li key={item}
             className={index === item ? Style.selected : null}>
        </li>))}
    </ul>)
  }
}
