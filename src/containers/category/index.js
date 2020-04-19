import React from 'react'
import Style from './index.module.scss'
import SearchHead from '../../components/SearchHead/SearchHead'
import CommendList from '../home/CommendList'
import Axios from 'axios'

class Category extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      category: '',
      keyWord: '',
      list: [],
    }
  }

  componentDidMount () {
    // 获取路由中的参数
    const params = this.props.match.params
    const category = params.id
    const keyWord = this.state.keyWord
    this.setState(() => ({ category }),
      () => {this.getSearchList(category, keyWord) })

  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState !== this.state) {
      const { category, keyWord } = this.state
      this.getSearchList(category, keyWord)
    } else {return false}
  }

  render () {
    return (<div className={Style.wrapper}>
      <h1>{this.state.category}</h1>
      <SearchHead keyWord={this.state.keyWord}
                  category={this.state.category}
                  goBackHistory={this.goBackHistory}
                  enterHandle={this.enterHandle}/>

      <CommendList list={this.state.list}/>

    </div>)
  }

  goBackHistory = () => {
    let history = this.props.history
    history.push('/')
  }

  // 按键回车跳转到搜索结果页面
  enterHandle = (value) => {
    const history = this.props.history
    this.setState(() => ({ keyWord: value }),
      () => { history.push(`/category/${this.state.category}/${this.state.keyWord}`) })

  }

  getSearchList = (category, keyWord) => {

    // query the data, based on this.props.category
    // RESTful api: '/search/category' by post method

    Axios.post('/commend',
      { category, keyWord },
    )
      .then((data) => {
        this.setState({ list: data.data })
      })
      .catch((err) => {throw err })

  }
}

export default Category
