import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from './components/pages/homepage/HomePage.jsx';
import ShopPage from './components/pages/shop-page/shop-page';
import Header from './components/header/header.jsx';
import SignIO from './components/pages/signio-page/signio.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.reducer';
import CheckoutPage from './components/pages/checkout/checkout.jsx';
import {selectCurrentUser} from './redux/user/user.selector';



class App extends React.Component{
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          console.log(this.state);
        })
      }else
      {
        setCurrentUser(userAuth) //when you logout, userAuth sets to null and proceeds to set current user to null as well
      }

      
  })
    
    
  }
//this.unsubscribeFromAuth method is called on the lifecycle method below to prevent memory leak after the user exits the web app
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){
    const {currentUser} = this.props;
    
    
  
    return (
      <div> 
        <Header/>
        <Switch>
          
          <Route exact path= '/' component= {HomePage}/>
          <Route path= '/shop' component= {ShopPage}/>
          <Route exact path= '/checkout' component= {CheckoutPage}/>

          <Route exact path= '/signin' render={() => (currentUser) ? <Redirect to='/'/>: <SignIO/>}/>
        </Switch>


      </div>
    );}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  
})



//we mapDispatch to props in our app.js  nb: dispatch is for the action reducer/user.reducer.js file
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps,mapDispatchToProps)(App);

//first parameter of connect() is the mapStateToProps which has the state. that is connect(mapStatetoProps,mapDispatchToProps)
