import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Login from './Login'
import firebase from 'firebase'
import 'firebase/auth'
import CreateAccount from './CreateAccount';
import Home from './Home'


import { Container, Col, Row, Card, Button, } from 'react-bootstrap'
import ModalDisplay from './ModalDisplay';


function App() {

  var user = firebase.auth().currentUser
  var email, name, photoUrl

  if (user != null) {
    email = user.email
    name = user.displayName
    photoUrl = user.photoURL
    
  }

  const testName = useRef(name)

  const [ loginShow, setLoginShow ] = useState(false)
  const [ createAccountShow, setCreateAccountShow ] = useState(false)
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)
  const [ modalDisplayShow, setModalDisplayShow ] = useState(false)
  const [ accountCreation, setAccountCreation ] = useState(false)

  const firebaseApp = firebase.apps[0]

  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Header
        setLoginShow={setLoginShow}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        setModalDisplayShow={setModalDisplayShow}
        email={email}
        name={name}
        photoUrl={photoUrl}
        user={user}
        testName={testName}
        />
        <Login 
        show={loginShow}
        onHide={() => setLoginShow(false)}
        setCreateAccountShow={setCreateAccountShow}
        setLoginShow={setLoginShow}
        setUserLoggedIn={setUserLoggedIn}
        />
        <CreateAccount
          show={createAccountShow}
          onHide={() => setCreateAccountShow(false)}
        />
      </Container>
      </header>
    </div>
  );
}

export default App;
