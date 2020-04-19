import React from 'react'
import { connect } from 'react-redux'
import Style from './index.module.scss'
import * as C from './store/constant'
import HomeHeader from '../../components/HomeHeader'
import Swiper from '../../components/Swiper'
import * as AC from './store/actionCreator'
import Advertise from './Advertise'
import Commend from './Commend'

class Home extends React.Component {

  componentDidMount () {
    this.props.getSwiperData()
    this.props.getAdsData()
    this.props.getCommendData()
  }

  render () {
    const { swipeImages,ads,commendData,currentCity } = this.props
    const imgLink = swipeImages.map((item) => { return item.imgLink })
    return (
      <div>
        <HomeHeader
          cityName={currentCity} enterHandle={this.enterHandle}
        />
        <Swiper swipeImages={swipeImages}  />
        <Advertise ads={ads} />

        <Commend commendData={commendData}/>

      </div>
    )

  }

  enterHandle = (value) => {
    const history = this.props.history;
    history.push(`/search/all/${value}`)
  }
}

const mapToState = (state) => ({
  swipeImages: state.home.swipeImages,
  ads: state.home.ads,
  commendData: state.home.commendData,
  currentCity: state.city.currentCity,
})

const mapToDispatch = (dispatch) => ({
  getSwiperData(){
    dispatch(AC.getSwiperData())
  },
  getAdsData(){
    dispatch(AC.getAdsData())
  },
  getCommendData(){
    dispatch(AC.getCommendData())
  },
})

export default connect(mapToState, mapToDispatch)(Home)


