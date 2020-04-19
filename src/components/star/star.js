import React from 'react'
import Style from './star.module.scss'

export default class Star extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state={
  //     star:0
  //   }
  // }
  //
  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   if (prevProps.star === this.props.star) {
  //     return false
  //   } else {
  //     this.setState({star:this.props.star})
  //     return true
  //   }
  // }

  render () {
    let starArr = [1, 2, 3, 4, 5]
    return (<div className={Style.wrapper}>
      {starArr.map((item, index) => {
        if (item < this.props.star + 1) {
          return (<i key={index} className={`icon-star ${Style.light}`}></i>)
        } else {
          return (<i key={index} className={`icon-star`}></i>)
        }
      })}
    </div>)
  }

}
