import React from 'react'
import Style from './SearchHead.module.scss'
import SearchInput from '../SearchInput'

export default class SearchHead extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: this.props.keyWord || '',
    }
  }

  render () {
    return (<div className={Style.wrapper}>

      <div className={Style.headerBack}>
        <i className="icon-angle-left" onClick={this.props.goBackHistory}></i>
      </div>

      <SearchInput
        value={this.props.keyWord || ''}
        enterHandle={this.props.enterHandle}/>
    </div>)
  }

}
