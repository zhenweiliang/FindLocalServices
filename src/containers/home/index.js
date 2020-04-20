import React from 'react'
import { connect } from 'react-redux'
import Style from './index.module.scss'
import HomeHeader from '../../components/HomeHeader'
import Swiper from '../../components/Swiper'
import * as AC from './store/actionCreator'
import CategoryList from './CategoryList'
import Commend from './Commend'

class Home extends React.Component {

  componentDidMount () {
    this.props.getSwiperData()
    this.props.getCategoriesData()
    this.props.getCommendData()
  }

  render () {
    const { swipeImages, categories, commendData, currentCity } = this.props
    const imgLink = swipeImages.map((item) => { return item.imgLink })
    return (
      <div className={Style.wrapper}>
        <HomeHeader cityName={currentCity} enterHandle={this.enterHandle}/>
        <Swiper swipeImages={swipeImages}/>
        <CategoryList categories={categories}/>
        <Commend commendData={commendData}/>
      </div>
    )

  }

  enterHandle = (value) => {
    const history = this.props.history
    history.push(`/search/all/${value}`)
  }
}

const mapToState = (state) => ({
  swipeImages: state.home.swipeImages,
  categories: state.home.categories,
  commendData: state.home.commendData,
  currentCity: state.city.currentCity,
})

const mapToDispatch = (dispatch) => ({
  getSwiperData () {
    dispatch(AC.getSwiperData())
  },
  getCategoriesData () {
    dispatch(AC.getCategoriesData())
  },
  getCommendData () {
    dispatch(AC.getCommendData())
  },
})

export default connect(mapToState, mapToDispatch)(Home)


