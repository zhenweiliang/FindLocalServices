import React from 'react'
import Style from './LoginPanel.module.scss'

export default class LoginPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
    }
  }

  render () {
    return (<div className={Style.wrapper}>
      <h2>{this.props.errMsg}</h2><br/>
      <div className={Style.loginUsername}>
        <i className="icon-mobile"></i>
        <input className="phoneNUmber" type="text"
               placeholder="Please input username"
               ref={ref => this.userNameRef = ref}/>
      </div>
      <div className={Style.loginCheckCode}>
        <i className="icon-key"></i>
        <input className={Style.checkCode} type="password"
               placeholder="Please input password"
               ref={ref => this.passwordRef = ref}/>
      </div>
      <div className={Style.loginButton}
           onClick={() => {this.props.handleLogin(this.userNameRef.value, this.passwordRef.value) }}>
        登录
      </div>
    </div>)

  }
}
