import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FaUserAlt, FaLock, FaEnvelope} from 'react-icons/fa'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialGooglePlusCircular } from 'react-icons/ti'
import { Button, Center } from '@chakra-ui/react'
import Formcontrol from '../fromcomponent/Formcontrol'
import { useAlert } from 'react-alert'

function Signup({changeState,clicked}) {
    const alert = useAlert()
    const initialValues = {
        username: '',
        email:'',
        password: '',
        confirmpass:''
    }
    const validationSchema = Yup.object({
        username: Yup.string().required('Please enter a username').min(3, 'must be atleast 3 characters'),
        email:Yup.string().required('Please enter your email').email('Invalid email'),
        password: Yup.string().required('Password required').min(6, 'must be atleast 6 characters'),
        confirmpass:Yup.string().oneOf([Yup.ref('password'),''],`Password doesnt match`).required('This field is required')
    })
    const onSubmit = (values , props) => {
        console.log(values)
        props.resetForm()
        alert.success(`Welcome ${values.username}`)
    }
    
    return (
        <div className={clicked?'signup-signup-clicked':'signup-signup'}>
            <div className="sign-up-form form">
                <h2 className='title'>Sign up</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => <Form>
                            <Formcontrol name='username' type='text' Icon={FaUserAlt} label='Username' autoComplete="username" />
                            <Formcontrol name='email' type='text' Icon={FaEnvelope} label='Email' autoComplete = "email" />
                            <Formcontrol name='password' type='password' Icon={FaLock} label='Password' autoComplete="new-password" />
                             <Formcontrol name='confirmpass' type='password' Icon={FaLock} label='Confirm password' autoComplete="none" />
                            <Center>
                                <Button type='submit' _hover={{
                                    color: 'black',
                                    bg: 'red.100'
                                }} sx={{
                                    width: '150px',
                                    outline: 'none',
                                    border: 'none',
                                    borderRadius: '48px',
                                    backgroundColor: 'red.300',
                                    color: 'white',
                                    marginTop: '5px'


                                }}>Sign up</Button>
                            </Center>

                        </Form>
                    }
                </Formik>
                <p className="social-text">Or sign in with social media platforms</p>
                <div className="social-media">
                    <TiSocialFacebookCircular size={46} className='social-icon' />
                    <TiSocialGooglePlusCircular size={46} className='social-icon' />
                    <TiSocialTwitterCircular size={46} className='social-icon' />
                </div>
                <p>Have a account ? <button className='signin-btn' onClick = {changeState}>Sign in</button></p>
            </div>
        </div>
    )
}

export default Signup
