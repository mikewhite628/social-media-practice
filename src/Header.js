import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import 'firebase/auth'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'

import { Container, Col, Row, Card, Button, Navbar } from 'react-bootstrap'


function Header({setLoginShow, userLoggedIn, setUserLoggedIn, email, user, name, photoUrl, testName}) {

  const signUserOut = () => {
    firebase.auth().signOut().then(() => {
      alert('Sign Out Successfull')
      setUserLoggedIn(false)
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <Router>
          <Navbar className={'justify-content-between'} bg='primary' variant='dark'>
          <Link to='/'><Navbar.Brand>Home</Navbar.Brand></Link>
          {userLoggedIn ? <Link to='/profile'><Navbar.Brand>Profile</Navbar.Brand></Link> : null }
          {userLoggedIn ? <div><Navbar.Text>Hello {email}!</Navbar.Text><Button variant='secondary' onClick={() => signUserOut()}>Sign Off </Button></div>  :  <div><Navbar.Text>Hello Guest!</Navbar.Text><Button variant='secondary' onClick={() => setLoginShow(true)}>Log In</Button></div>}
        </Navbar>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/profile'>
                  {!userLoggedIn ? <Redirect to='/' /> : 
                    <Profile 
                    email={email}
                    user={user}
                    name={name}
                    photoUrl={photoUrl}
                    testName={testName}
                    />
                    } 
                </Route>
            </Switch>
    </Router>

  );
}

export default Header;
