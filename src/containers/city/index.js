import React from 'react'
import Style from './index.module.scss'
import * as AC from './store/actionCreator'
import * as C from './store/constant'

import { connect } from 'react-redux'
import CommonHead from '../../components/CommonHead/CommonHead'
import CityList from './CityList'

class City extends React.Component {

  render () {

    return (<div>
      <CommonHead title={'Pick a City'}/>
      <div className={Style.cityCurrent}>
        {this.props.currentCity}
      </div>
      <CityList changeCity={this.props.changeCity}/>

    </div>)
  }

}

const mapToState = (state) => ({
  currentCity: state.city.currentCity,
})

const mapToDispatch = (dispatch) => ({
  changeCity (newCity) {
    dispatch(AC.actionCreator(C.CHANGE_CITY, newCity))
  },
})

export default connect(mapToState, mapToDispatch)(City)
