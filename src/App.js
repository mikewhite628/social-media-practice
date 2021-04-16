import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Login from './Login'
import firebase from 'firebase'
import CreateAccount from './CreateAccount';

import { Container, Col, Row, Card, Button, } from 'react-bootstrap'
import ModalDisplay from './ModalDisplay';


function App() {

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
        />
        <Login 
        show={loginShow}
        onHide={() => setLoginShow(false)}
        setCreateAccountShow={setCreateAccountShow}
        setLoginShow={setLoginShow}
        />
        <CreateAccount
          show={createAccountShow}
          onHide={() => setCreateAccountShow(false)}
        />
        <ModalDisplay 
          show={modalDisplayShow}
          accountCreation={accountCreation}
          onhide={() => setModalDisplayShow(false)}
          setLoginShow={setLoginShow}
          setCreateAccountShow={setCreateAccountShow}
        />
        <Row>
          <Col sm={6}> 
            <Card>
              <Card.Img variant='top' src='https://picsum.photos/200/200' />
              <Card.Body>
                <Card.Title>Col 1</Card.Title>
                <Card.Text>
                <code>
                 <pre>
                {JSON.stringify(firebaseApp, null, 2)}
                </pre>
                </code>
                </Card.Text>
                <Button variant='primary'>Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}> 
          <Card>
              <Card.Img variant='top' src='https://picsum.photos/200/200' />
              <Card.Body>
                <Card.Title>col 2</Card.Title>
                <Card.Text>
                  Some quick example text
                </Card.Text>
                <Button variant='primary'>Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
          <Card>
              <Card.Img variant='top' src='https://picsum.photos/200/200' />
              <Card.Body>
                <Card.Title>col 3</Card.Title>
                <Card.Text>
                  Some quick example text
                </Card.Text>
                <Button variant='primary'>Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className={'mt-3'}>
          <Col md={{span: 8, offset: 2}}>
          <Card>
              <Card.Img variant='top' src='https://picsum.photos/350/200' />
              <Card.Body>
                <Card.Title>col 1 row 2</Card.Title>
                <Card.Text>
                  Some quick example text
                </Card.Text>
                <Button variant='primary'>Go Somewhere</Button>
              </Card.Body>
            </Card>
          

          <Card>
              <Card.Img variant='top' src='https://picsum.photos/500/300' />
              <Card.Body>
                <Card.Title>col 2 row 2</Card.Title>
                <Card.Text>
                  Some quick example text
                </Card.Text>
                <Button variant='primary'>Go Somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
