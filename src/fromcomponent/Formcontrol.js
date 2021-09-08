import { Field } from 'formik'
import React from 'react'
import {
    FormControl,

    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react"
import { TiWarningOutline } from 'react-icons/ti'
function Formcontrol(props) {
    const { label, name, Icon, ...rest } = props
    return (
        <Field name={name} className='maininput'>
            {
                ({ field, form }) => (
                    <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <InputGroup  >
                            <InputLeftElement pointerEvents='none'
                                sx={{ margin: '12px 0' }}
                                children={<Icon className='icon' />} />
                            <Input {...field} {...rest} placeholder={label} size="lg"
                                w={[200, 300, 380]}
                                sx={{
                                    maxWidth: '380px',

                                    borderRadius: '55px',
                                    margin: '10px 0',
                                    padding: '0 3rem'

                                }}

                            />
                        </InputGroup>
                        <FormErrorMessage
                            fontSize='1rem' fontWeight='semibold'><TiWarningOutline size={25} />{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                )
            }
        </Field>
    )
}

export default Formcontrol
