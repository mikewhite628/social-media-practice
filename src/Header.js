import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import 'firebase/auth'

import { Container, Col, Row, Card, Button, Navbar } from 'react-bootstrap'


function Header({setLoginShow, userLoggedIn, setUserLoggedIn, setCreateAccountShow, setModalDisplayShow}) {


  return (
        <Navbar className={'justify-content-between'} bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>Home</Navbar.Brand>
          {userLoggedIn ? <Navbar.Text>Hello User!</Navbar.Text> :  <div><Navbar.Text>Hello Guest!</Navbar.Text><Button variant='secondary' onClick={() => setLoginShow(true)}>Log In</Button></div>}
        </Navbar>

  );
}

export default Header;
