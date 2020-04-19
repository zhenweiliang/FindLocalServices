import React from 'react'
import Style from './index.module.scss'
import CommonHead from '../../components/CommonHead/CommonHead'
import DetailInfo from './DetailInfo'
import DetailComment from './DetailComment'

class Detail extends React.Component {

  render () {
    let params = this.props.match.params
    let id = params.id

    return (<div className={Style.wrapper}>
      <CommonHead title={'Restaurant Detail'}/>
      <DetailInfo id={id} />
      <DetailComment id={id}  />

    </div>)
  }

}

export default Detail
