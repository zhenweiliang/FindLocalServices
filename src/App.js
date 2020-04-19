import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './containers/home'
import City from './containers/city'
import Detail from './containers/detail'
import Search from './containers/search'
import Login from './containers/login'
import Category from './containers/category'


import './statics/css/icon.css'
import './statics/css/normalize.css'

function App () {
  return (<div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/city' exact component={City}/>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/search/:category/:keyword?' exact component={Search}/>
            <Route path='/login/:router?' component={Login}/>
            <Route path='/category/:id' component={Category}/>

          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
