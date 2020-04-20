import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../../components/SearchInput/'
import Style from './index.module.scss'

export default class HomeHeader extends React.Component {

  render () {
    return (<div className={Style.header}>
      <div className={Style.headerCity}>
        <Link to="/city">
          <span>
          {this.props.cityName}
            <i className="icon-angle-down"></i>
          </span>
        </Link>
      </div>

      <SearchInput enterHandle={this.props.enterHandle}/>

      <div className={Style.headerUser}>
        <Link to="/login">
          <i className="icon-user"></i>
        </Link>
      </div>
    </div>)
  }
}
