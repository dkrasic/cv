import { FieldValues, useForm } from 'react-hook-form'
import { Button, ErrorMessage, Form, Input, InputWrapper } from '../../../styles/common'
import styled from 'styled-components'
import { useAuth } from '../../../context/authContext'
import { useSearchParams } from 'react-router-dom'
import { validation } from '../validation'

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
        <Input type="text" required placeholder="Email" {...register('email', validation.email)} />
        {errors.username && <ErrorMessage>{`${errors.username.message}`}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Input
          type="password"
          required
          placeholder="Password"
          {...register('password', validation.password)}
        />
        {errors.password && <ErrorMessage>{`${errors.password.message}`}</ErrorMessage>}
      </InputWrapper>

      <Button type="submit" disabled={isSubmitting}>
        Login
      </Button>
    </LoginForm>
  )
}
