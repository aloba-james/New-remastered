import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import { UserState } from '../../store/user/user.reducer';

import { selectCurrentUser } from "../../store/user/user.selector";



const User = () => {
    const currentUser = useSelector(selectCurrentUser) as UserState['currentUser'];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newDisplayname, setNewDisplayName] = useState();

    const onChangeHandler = () => {
        
    }


    return(
    <>
        <h1> This is User Page </h1>
        <h2> User Profile </h2>

        <Button variant="primary" onClick={handleShow}>
            Edit Profile 
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title> Your Edit Personal Account </Modal.Title>
            <br />
            <Modal.Title> {currentUser.displayName} </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group controlId="display-name">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control type="displayName" placeholder={currentUser.displayName} onChange = {onChangeHandler}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder={currentUser.email}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary"  >
                        Update
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    
    </>
    );
};


export default User;

