import React from 'react'
import Style from './Advertise.module.scss'
import { Link } from 'react-router-dom'

export default class CategoryList extends React.Component {

  render () {
    return (<div className={Style.advertise}>
      <ul className={Style.advertiseList}>
        {this.props.categories.length
          ? this.props.categories.map((item) => (
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
