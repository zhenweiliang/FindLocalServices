import React from 'react'
import Style from './index.module.scss'
import SearchHead from '../../components/SearchHead/SearchHead'
import SearchList from './SearchList'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: '',
      keyWord: '',
    }
  }

  componentDidMount () {
    //
    const params = this.props.match.params
    const category = params.category
    const keyWord = params.keyWord

    this.setState({
      keyWord, category
    })
  }

  render () {
    return (<div className={Style.wrapper}>
      <SearchHead keyWord={this.state.keyWord}
                  goBackHistory={this.goBackHistory}
                  enterHandle={this.enterHandle}/>
      <SearchList
        keyWord={this.state.keyWord}
        category={this.state.category}
      />


    </div>)
  }

  goBackHistory = () => {
    let history = this.props.history
    history.push('/')
  }

  // 按键回车跳转到搜索结果页面
  enterHandle = (value) => {
    const history = this.props.history
    history.push(`/search/${this.state.category}/${value}`)
  }

}

export default Search
