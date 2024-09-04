import { FieldValues, useForm } from 'react-hook-form'
import { Button, ErrorMessage, Form, Input, InputWrapper } from '../../../styles/common'
import styled from 'styled-components'
import { useAuth } from '../../../context/authContext'
import { useSearchParams } from 'react-router-dom'

const LoginForm = styled(Form)`
  width: 50%;
`

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const { onLogin } = useAuth()
  const [searchParams] = useSearchParams()
  const redirectToPath = searchParams.get('redirectTo')

  const submitCredentials = async (values: FieldValues) => {
    await onLogin(
      {
        email: values.email,
        password: values.password,
      },
      redirectToPath || undefined
    )
  }

  return (
    <LoginForm onSubmit={handleSubmit(submitCredentials)}>
      <InputWrapper>
        <Input
          type="text"
          required
          placeholder="Email"
          {...register('email', {
            required: 'Email is required.',
          })}
        />
        {errors.username && <ErrorMessage>{`${errors.username.message}`}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Input
          type="text"
          required
          placeholder="Password"
          {...register('password', {
            required: 'Password is required.',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters.',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message:
                'Password must contain at least one uppercase and lowercase letter and a number.',
            },
          })}
        />
        {errors.password && <ErrorMessage>{`${errors.password.message}`}</ErrorMessage>}
      </InputWrapper>

      <Button type="submit" disabled={isSubmitting}>
        Login
      </Button>
    </LoginForm>
  )
}
