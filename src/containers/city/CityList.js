import React from 'react'
import Style from './CityList.module.scss'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class CityList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cityList: [],
    }
  }

  componentDidMount () {
    Axios.post('/city')
      .then((data) => {
        console.log(data.data)
        this.setState({ cityList: data.data })
      })
      .catch((err) => {throw err})
  }

  render () {
    return (<div className={Style.wrapper}>
      <h1>City List</h1>
      <ul className={Style.cityList}>
        {this.state.cityList.map((item) => (
          <Link to={'/'} key={item.city}>
            <li onClick={() => this.props.changeCity(item.city)}>
              {item.city}
            </li>
          </Link>
        ))}
      </ul>
    </div>)

  }

}





