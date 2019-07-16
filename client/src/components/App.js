import React from 'react'

/* packages */
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash';
import {connect} from 'react-redux'

/* components */
import AddPage from './AddPage'
import ProductShow from './productAdmin/productShow'

import Register from './user/register'
import Login from './user/login'
import Account from './user/account'
import Logout from './user/logout'

import Review from './review and comment/review'
import ReviewShow from './review and comment/reviewDisplay'
import Comment from './review and comment/comment'

class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {_.isEmpty(localStorage.getItem('userAuthToken')) && 
            (<div>
              <Link to="/users/register" >Register</Link><br />
              <Link to="/users/login" >Login</Link>
              </div>)}

            {!_.isEmpty(localStorage.getItem('userAuthToken')) && 
            (<div>
                  <Link to="/users/account">Account</Link><br/>
                  <Link to="/users/logout">Logout</Link>
             </div>)}

            <Link to="/products"><h2>Add</h2></Link>
            <Link to="/products/show"><h2>Show(added by postman)</h2></Link>
            {/* <Link to="/reviews"><h2>Review Write</h2></Link> */}
            <Link to="/reviews" ><h2>Review show</h2></Link>
            <Link to="/comments" ><h2>Comment add</h2></Link>

            <Switch>
                  <Route exact path="/users/register" component={Register}/>
                  <Route exact path="/users/login" component={Login} />
                  <Route exact path="/users/account" component={Account} />
                  <Route exact path="/users/logout" component={Logout} />

                  <Route path="/products" component={AddPage} exact={true} />
                  <Route path="/products/show" component={ProductShow} />
                  <Route path="/reviews" component={ReviewShow} />
                  <Route path="/comments" component={Comment} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)