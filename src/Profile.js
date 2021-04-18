import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import firebase from 'firebase'
import 'firebase/auth'
import CreateAccount from './CreateAccount';
import { Container, Col, Row, Card, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import Header from './Header'
import bsCustomFileInput from 'bs-custom-file-input'



function Profile({email, name, photoUrl, user, storage}) {

  const [ updatingProfile, setUpdatingProfile ] = useState(false)

  const [ profileInfo, setProfileInfo ] = useState({userName:'', userImg:''})


 


  const [ image, setImage ] = useState(null)
  const [imageUrl, setImageUrl ] = useState('')
  
  const handleChange = e => {
      const uploadedImage = e.target.files[0]
      setImage(uploadedImage)

    }
      
  

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
        storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          console.log(url)
          setImageUrl(url)
        })
      }
    )
  }


  const handleUsernameInputChange = (event) => {
    setProfileInfo({...profileInfo, userName: event.target.value})
  }


  const updateProfileInfo = () => {
    user.updateProfile({
      displayName: profileInfo.userName,
      photoURL: imageUrl
    }).then(function() {
      setUpdatingProfile(false)
    }).catch(function(error) {
      console.log(error)
    })
  }

  const finished = () =>{
    updateProfileInfo()
    setUpdatingProfile(false)
    console.log(profileInfo.userName)
    console.log(imageUrl)
  }

  useEffect(() => {
    setProfileInfo({userName: user.displayName,  userImg: user.photoURL})
  },[]);

  useEffect(() => {
    bsCustomFileInput.init()
  },)



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
                <Card.Text>User Name: {profileInfo.userName}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text className={'mb-3'}>Profile Picture:</Card.Text> 
                <Card.Img src={profileInfo.userImg} />
                </div>
                :
                <div>
                <Card.Title>Updating User Information</Card.Title>
                <Form>
                <Form.Group controlId='formUpdateInfo'>
                  <Form.Label>Update Username</Form.Label>
                  <Form.Control type='text' placeholder='Username' onChange={handleUsernameInputChange}/>
                </Form.Group>
                <Form.Label>Update Profile Picture</Form.Label>
                {photoUrl ? <Card.Img src={imageUrl} /> : 'Choose a photo'}
                <Form.Label>Upload a profile picture</Form.Label>
                <div className={'mb-3'}>
                    <Form.File id='custom-file' label='Custom file input' custom className={'custom-file'}
                    onChange={handleChange}>
                    </Form.File>
                    <Button variant='secondary' className={'mt-3'} onClick={() => handleUpload()}>Upload</Button>
                </div>
                </Form>
                </div>
                }
                {!updatingProfile ? <Button variant='primary' onClick={() => setUpdatingProfile(true)}>Update Profile</Button> : <Button variant='danger' onClick={() => finished()}>Finished!</Button> }
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default Profile;
