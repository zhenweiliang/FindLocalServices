import React from 'react'
import Style from './Advertise.module.scss'
import { Link } from 'react-router-dom'

export default class Advertise extends React.Component {

  render () {
    return (<div className={Style.advertise}>
      <ul className={Style.advertiseList}>
        {this.props.ads.length
          ? this.props.ads.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <h5>  {item.title} </h5>
                <img src={item.img} alt=""/>
              </Link>
            </li>
          ))
          : <div> loading ...</div>
        }
      </ul>


    </div>)
  }

}
