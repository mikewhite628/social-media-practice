import React, { useRef, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import 'firebase/auth'
import CreateAccount from './CreateAccount'
import Login from './Login'


import { Modal, Button, Form } from 'react-bootstrap'


function ModalDisplay(props){

    const {
        createAccountShow, 
        setCreateAccountShow,
        setLoginShow,
        accountCreation,
    } = props

    return (
        <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        >
        {accountCreation ? 
        
        <Login />
        
        : 
        
        <CreateAccount />
            }
        

        </Modal>
        )
    }

export default ModalDisplay