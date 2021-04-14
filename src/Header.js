import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Col, Row, Card, Button, Navbar } from 'react-bootstrap'


function Header({setLoginShow}) {
  return (
        <Navbar className={'justify-content-between'} bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>Home</Navbar.Brand>
          <Button variant='secondary' onClick={() => setLoginShow(true)}>Sign In</Button>
        </Navbar>

  );
}

export default Header;
