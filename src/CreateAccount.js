import React, { useRef, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import 'firebase/auth'


import { Modal, Button, Form } from 'react-bootstrap'


function CreateAccount(props){

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

    const createAccount = (values) => {
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then((userCredential) => {
                var user = userCredential.user
            })
            .catch((error) => {
                var errorCode = error.code
                var errorMessage = error.message
            })
    }
  
    return (
        <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
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
                        <Form.Control type='password' plaseholder='Password' 
                        value={values.password} onChange={handlePasswordInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' onClick={createAccount}>Submit</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default CreateAccount