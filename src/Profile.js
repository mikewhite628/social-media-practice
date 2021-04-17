import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import firebase from 'firebase'
import 'firebase/auth'
import CreateAccount from './CreateAccount';
import { Container, Col, Row, Card, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import Header from './Header'

function Profile({email, name, photoUrl, user, testName}) {

  const [ updatingProfile, setUpdatingProfile ] = useState(false)

  const [ profileValues, setProfileValues ] = useState({
        username: '',
        userPhoto: ''

  })

  const handleUsernameInputChange = (event) => {
    setProfileValues({...profileValues, username: event.target.value})
  }

  const handleUserPhotoChange = (event) => {
    setProfileValues({...profileValues, userPhoto: event.target.value})
  } 
  const updateProfileInfo = (profileValues) => {
    user.updateProfile({
      displayName: profileValues.username,
      photoURL: profileValues.userPhoto
    }).then(function() {
      alert('update successfull')
      setUpdatingProfile(false)
    }).catch(function(error) {
      console.log(error)
    })
  }

  const check = () => {
    console.log(user)
  }

  useEffect(() => {
    name = user.displayName
  })
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col sm={12}> 
            <Card>
              <Card.Body>
                {!updatingProfile ?
                <div>
                <Card.Title>User Profile</Card.Title>
                <Card.Text>User Name: {user.displayName}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text className={'mb-3'}>Profile Picture:{photoUrl}</Card.Text> 
                </div>
                :
                <div>
                <Card.Title>Updating User Information</Card.Title>
                <Form>
                <Form.Group controlId='formUpdateInfo'>
                  <Form.Label>Update Username</Form.Label>
                  <Form.Control type='text' placeholder='Username' value={profileValues.username} onChange={handleUsernameInputChange}/>
                </Form.Group>
                <div className={'mb-3'}>
                    <Form.File id='formcheck-api-custom' custom value={profileValues.userPhoto} onChange={handleUserPhotoChange}>
                      <Form.File.Input isValid />
                        <Form.File.Label data-browse='Select Image'>
                          Choose File
                        </Form.File.Label>
                        <Form.Control.Feedback type='valid'>You did it!</Form.Control.Feedback>
                    </Form.File>
                </div>
                </Form>
                </div>
                }
                {!updatingProfile ? <Button variant='primary' onClick={() => setUpdatingProfile(!updatingProfile)}>Update Profile</Button> : <Button variant='danger' onClick={() => updateProfileInfo(profileValues)}>Finished!</Button> }
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default Profile;
