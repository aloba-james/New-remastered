import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";

import { updateUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import { selectCurrentUser } from "../../store/user/user.selector";



const User = () => {
    const currentUser = useSelector(selectCurrentUser);
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


// const defaultFormFields = {
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   };
  
//   const SignUpForm = () => {
//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const { displayName, email, password, confirmPassword } = formFields;
  
//     const resetFormFields = () => {
//       setFormFields(defaultFormFields);
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       if (password !== confirmPassword) {
//         alert('passwords do not match');
//         return;
//       }
  
//       try {
//         const { user } = await createAuthUserWithEmailAndPassword(
//           email,
//           password
//         );
  
//         await createUserDocumentFromAuth(user, { displayName });
//         resetFormFields();
//       } catch (error) {
//         if (error.code === 'auth/email-already-in-use') {
//           alert('Cannot create user, email already in use');
//         }
//         else if (error.code === 'auth/weak-password') {
//           alert('Passwords should be at least 6 characters');
//         }  
//         else {
//           alert(error);
//           console.log('user creation encountered an error', error);
//         }
//       }
//     };
  
//     const handleChange = (event) => {
//       const { name, value } = event.target;
  
//       setFormFields({ ...formFields, [name]: value });
//     };
  
//     console.log(formFields);
  
//     return (
//       <SignUpContainer>
//         <h2>Don't have an account?</h2>
//         <span>Sign up with your email and password</span>
//         <form onSubmit={handleSubmit}>
//           <FormInput
//             label='Display Name'
//             type='text'
//             required
//             onChange={handleChange}
//             name='displayName'
//             value={displayName}
//           />
  
//           <FormInput
//             label='Email'
//             type='email'
//             required
//             onChange={handleChange}
//             name='email'
//             value={email}
//           />
  
//           <FormInput
//             label='Password'
//             type='password'
//             required
//             onChange={handleChange}
//             name='password'
//             value={password}
//           />
  
//           <FormInput
//             label='Confirm Password'
//             type='password'
//             required
//             onChange={handleChange}
//             name='confirmPassword'
//             value={confirmPassword}
//           />
  
//           <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Remember Password" />
//           </Form.Group>
  
//           <Button type='submit'>Sign Up</Button>
//         </form>
//       </SignUpContainer>