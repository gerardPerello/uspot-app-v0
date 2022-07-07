import React from 'react'
import { View, Button, StyleSheet} from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'


const initialValues = {
    email: '',
    password: ''
}


const styles = StyleSheet.create({
    error: {
        color: 'red',
        margin: 5,
        fontSize: 12,
        marginTop: -5,
        marginBottom: 10
    },
    form: {
        margin: 12
    }
})

//hooks - react hook form tambien se puede usar, envez de formik.
const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput 
            value={field.value}
            error={meta.error}
            onChangeText={value => helpers.setValue(value)}
            {...props}/>
            {meta.error && <StyledText style={styles.error}>
                {meta.error}</StyledText>}
        </>
    )
}

/* Lo cambiamos y usamos el yup
const validate = values => {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9·-]+\.[a-zA-Z]{2,4}$/i.
    test(values.email)) {
        errors.email = 'Invalid email adress'
    }
    console.log(errors)

    return errors
}
*/

export default function LogInPage () {
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} 
                onSubmit={values => console.log(values)}>
                    {({handleChange, handleSubmit, values}) => {
                        return (
                        <View style={styles.form}>
                            <FormikInputValue
                             name='email'
                             placeholder='E-mailN'/>
                            <FormikInputValue
                             name='password'
                             placeholder='Password'
                             secureTextEntry/>
                            <Button onPress={handleSubmit} title='Log In'></Button>
                        </View>
                        )
                    }}

                </Formik>
    )
}