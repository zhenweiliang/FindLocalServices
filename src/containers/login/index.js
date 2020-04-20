import React from 'react'
import Style from './index.module.scss'
import CommonHead from '../../components/CommonHead/CommonHead'
import * as AC from '../login/store/actionCreator'
import { connect } from 'react-redux'
import LoginPanel from './LoginPanel'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  render () {
    const { loginStatus } = this.props
    return (<div>{this.checkLogin(loginStatus)}</div>)
  }

  checkLogin = (loginStatus) => {
    return loginStatus
      ? <Redirect to={'/'}></Redirect>
      : <div className={Style.wrapper}>
        <CommonHead title={'Login'}/>
        <LoginPanel handleLogin={this.props.handleLogin} errMsg={this.props.errMsg}/>
      </div>
  }

}

const mapToState = (state) => ({
  loginStatus: state.login.loginStatus,
  errMsg: state.login.errMsg,
})

const mapToDispatch = (dispatch) => ({
  handleLogin (username, password) {
    dispatch(AC.handleLogin(username, password))
  },
})

export default connect(mapToState, mapToDispatch)(Login)
