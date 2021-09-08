import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FaUserAlt, FaLock, } from 'react-icons/fa'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialGooglePlusCircular } from 'react-icons/ti'
import { Button, Center } from '@chakra-ui/react'
import Formcontrol from '../fromcomponent/Formcontrol'
import { useAlert } from 'react-alert'
function Signin({changeState , clicked}) {
    const alert = useAlert()
    const initialValues = {
        username: '',
        password: ''
    }
    const validationSchema = Yup.object({
        username: Yup.string().required('Please enter a username').min(3, 'must be atleast 3 characters'),
        password: Yup.string().required('Password required').min(6, 'must be atleast 6 characters')
    })
     const onSubmit = (values , props) => {
        console.log(values)
        props.resetForm()
        alert.success(`Welcome back ${values.username}`)
    }
    return (
        <div className={clicked? 'signin-signup-clicked':'signin-signup'}>
            <div className="sign-in-form form">
                <h2 className='title'>Sign in</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => <Form>
                            <Formcontrol name='username' type='text' Icon={FaUserAlt} label='Username' autoComplete="username" />
                            <Formcontrol name='password' type='password' Icon={FaLock} label='Password' autoComplete="current-password" />
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


                                }}>Sign in</Button>
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
                <p>Dont have a account ? <button className='signin-btn' onClick = {changeState}>Sign up</button></p>
            </div>
        </div>
    )
}

export default Signin
