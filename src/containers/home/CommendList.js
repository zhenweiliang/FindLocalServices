import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Style from './CommendList.module.scss'

export default class CommendList extends Component {

  render () {
    return (
      <ul className={Style.commendList}>
        {this.props.list.length
          ? this.props.list.map((item, index) => (
            <Link to={`/detail/${item.id}`} key={index}>
              <li>
                <div className={Style.goodsImg}>
                  <img src={item.img} alt=""/>
                </div>
                <div className={Style.goodsInfo}>
                  <p><span className={Style.title}>{item.title}</span><span
                    className={Style.distance}>{item.distance}</span></p>
                  <p>{this.sliceString(item.subTitle)}</p>
                  <p><span className={Style.price}>￥{item.price}</span><span
                    className={Style.sold}>sold:{item.number}</span></p>
                </div>
              </li>
            </Link>
          ))
          : `loading...`}
      </ul>
    )
  }

  sliceString = (string) => {
    return string.length < 12 ? string : `${string.slice(0, 12)}...`
  }
};

