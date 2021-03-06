import React from 'react'
import Style from './Commend.module.scss'
import CommendList from './CommendList'
import $ from 'jquery'

export default class Commend extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      page: 0,
    }

  }

  render () {
    const { page } = this.state
    this.maxPage = Math.ceil((this.props.commendData.length - 4) / 3)
    //initially display 4 items, then every click add 3 , can be changed below
    const renderList = [...this.props.commendData].splice(0, 4 + page * 3)

    //todo 下拉刷新
    return (
      <div className={Style.commend} id="commend">
        <h1 className={Style.commendTitle}>Recommend</h1>
        <CommendList list={renderList}/>
        {page < this.maxPage
          ? <div onClick={this.loadMore} className={Style.loadMore}>LoadMore</div>
          : <div className={`${Style.loadMore} ${Style.noMore}`}>No More...</div>
        }
      </div>
    )
  }

  loadMore = () => {
    $('html,body').animate(
      { scrollTop: document.getElementsByTagName('body')[0].scrollHeight },
      500,
    )
    const { page } = this.state
    if (page < this.maxPage) {this.setState({ page: page + 1 })}
  }
}

