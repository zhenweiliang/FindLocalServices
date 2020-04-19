import React from 'react'
import Style from './SearchList.module.scss'
import CommendList from '../home/CommendList'
import Axios from 'axios'
import * as C from '../home/store/constant'

export default class SearchList extends React.Component{
  constructor (props) {
    super(props)
    this.state={list:[]}
  }

  componentDidMount () {
   // query the data, based on this.props.category and this.props.data
    // RESTful api: '/search/category/keyword' by get method

    Axios.post('/commend')
      .then((data) => {
        this.setState({list:data.data})
      })
      .catch((err) => {throw err })
  }

  render () {
    return (<div className={Style.wrapper}>
      {/*Use the commend data to mock RESTFUL api*/}
      <CommendList list={this.state.list}/>
    </div>)
  }

}
