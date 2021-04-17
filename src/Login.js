import React, { useRef, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import 'firebase/auth'
import CreateAccount from './CreateAccount'


import { Modal, Button, Form } from 'react-bootstrap'


function Login({setCreateAccountShow, setLoginShow, setUserLoggedIn, ...restProps}){

    const [ values, setValues ] = useState({
        email:'',
        password:''
    })

    const [ submitted, setSubmitted ] = useState(false)
    
    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handlePasswordInputChange = (event) => {
        setValues({...values, password: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true)
    }


    const toggleModal = () => {
        setCreateAccountShow(true)
        setLoginShow(false)
    }

    const userSignIn = (values) => {
        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUserLoggedIn(true)
                setLoginShow(false)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message
            })
    }

    return (
        <Modal
        {...restProps}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>You are currently not signed in</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='EnterEmail' 
                        value={values.email} onChange={handleEmailInputChange}
                        />
                        <Form.Text className={'text-muted'}>
                            We'll never share you email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' 
                        value={values.password} onChange={handlePasswordInputChange}
                        />
                    </Form.Group>
                    <Button type='submit' onClick={() => userSignIn(values)}>Log In</Button>
                    <Button type='button' variant='danger' onClick={() => toggleModal()}>Sign-Up</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                
            </Modal.Footer>

        </Modal>
    )
}

export default Login