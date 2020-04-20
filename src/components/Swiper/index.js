import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import Style from './index.module.scss'
import { Link } from 'react-router-dom'
import SwiperDots from './swiperDots/swiperDots'

export default class Swiper extends Component {

  constructor (prop) {
    super(prop)
    // 初始化轮播图
    this.state = { index: 0 }
  }

  render () {
    // 轮播图基本配置
    const { swipeImages } = this.props

    let swiperOption = {
      continuous: true,
      auto: 2000,// 是否自动翻页
      startSlide: this.state.index,
      transitionEnd: index => { this.setState({ index }) },
    }

    return (
      <div className={Style.swiper}>
        <ReactSwipe className="carousel"
                    swipeOptions={swiperOption}>

          {swipeImages.map((item, index) =>
            (<div
              className={Style.swiperPage} key={index}>
              <Link to={item.imgLink}>
                <img src={item.imgUrl} alt="kk"/>
              </Link>
            </div>),
          )}

        </ReactSwipe>

        <SwiperDots index={this.state.index} qty={swipeImages.length}/>

      </div>
    )
  }

};



