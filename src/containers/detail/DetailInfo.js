import React from 'react'
import Style from './DetailInfo.module.scss'
import Star from '../../components/star/star'
import Axios from 'axios'

class DetailInfo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      img: '',
      title: '',
      star: 0,
      price: '',
      subTitle: '',
      desc: '',
    }
  }

  componentDidMount () {
    Axios.post('/detail', { id: this.props.id })
      .then((data) => {
        const detail = data.data[0]
        if (detail == null) {
          console.log('we got a server problem mate')
        } else {
          this.setState(detail)
        }
      })
      .catch((err) => {throw err })
  }

  render () {
    return (<div className={Style.wrapper}>
      <div className={Style.detailShow}>
        <div className={Style.detailImg}>
          <img src={this.state.img} alt=""/>
        </div>
        <div className={Style.detailInfo}>
          <h1>{this.state.title}</h1>
          <div className={Style.detailStar}>
            <Star star={this.state.star}/>
            <span className={Style.price}>${this.state.price}</span>
          </div>
          <p>{this.state.subTitle}</p>
        </div>
      </div>
      <div className="detail-describe">
        <p dangerouslySetInnerHTML={{ __html: this.state.desc }}></p>
      </div>
    </div>)
  }

}

export default DetailInfo
