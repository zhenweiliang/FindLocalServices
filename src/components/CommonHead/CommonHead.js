import React from 'react'
import Style from './CommonHead.module.scss'

export default class CommonHead extends React.Component {

  render () {
    return (
      <div className={Style.head}>
        <h1>
          <i className={Style.iconAngleLeft} onClick={this.clickHandle}> &lt; </i>
          {this.props.title}</h1>
      </div>
    )
  }

  clickHandle = () => {
    window.history.back()
  }

}
