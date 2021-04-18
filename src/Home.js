import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Login from './Login'
import firebase from 'firebase'
import 'firebase/auth'
import CreateAccount from './CreateAccount';


import { Container, Col, Row, Card, Button, } from 'react-bootstrap'
import ModalDisplay from './ModalDisplay';


function Home() {


  return ( 
      <div>
        <Row>
          <Col sm={4}> 
            <Card>
              <Card.Img variant='top' src='https://picsum.photos/100/100' />
              <Card.Body>
                <Card.Title>Col 1</Card.Title>
                <Card.Text>
                    111
                </Card.Text>
                <Button variant='primary'>Go Somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}> 
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

          <Col sm={4}>
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
        </div> 

  );
}

export default Home;
