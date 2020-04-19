import React from 'react'
import '../../statics/css/ReactPullLoad.css'
import Axios from 'axios'
import Style from './DetailComment.module.scss'
import Star from '../../components/star/star'

export default class DetailComment extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount = () => {
    Axios.post('/comment/',{id:this.props.id})
      .then((data) => {
        this.setState({ data: data.data })
      })
      .catch((err) => {throw err })

  }

  render () {
    const data = this.state.data
    return (
      <div className={Style.userComment}>
        <h1>Customer Comment</h1>
        <ul className={Style.userCommentList}>
          {data.length
            ? data.map((item, index) => (
              <li key={index}>
                <h1>
                  <i className="icon-user"></i>
                  {item.username}
                </h1>
                <div>
                  <Star star={item.star}/>
                </div>
                <p>{item.comment}</p>
              </li>
            ))
            : `No Comment Yet...`}
        </ul>
      </div>
    )
  }

}
