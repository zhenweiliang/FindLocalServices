import React from 'react'
import Style from './index.module.scss'

export default class SearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.keyWord || ''
    }
  }

  render () {
    return (
      <div className={Style.headerSearch}>
        <i className="icon-search"></i>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Search"/>
      </div>
    )
  }

  handleChange = (e) => {
    let value = e.target.value
    this.setState({ value })
  }

  handleKeyUp = (e) => {
    if (e.keyCode !== 13) {
      return
    }
    let value = this.state.value
    this.props.enterHandle(value)
  }
}
