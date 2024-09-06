import { FieldValues, useForm } from 'react-hook-form'
import { Button, ErrorMessage, Form, Input, InputWrapper } from '../../../styles/common'
import { validation } from '../validation'

type NewUserDTO = {
  name: string
  email: string
  password: string
}

export const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm()

  const addUser = async (data: FieldValues) => {
    try {
      const newUser: NewUserDTO = {
        name: data.name,
        email: data.email,
        password: data.password,
      }

      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })

      if (!response.ok) {
        throw new Error('Issue while creating new user.')
      }

      const res = await response.json()

      if (res) {
        console.log('res: ', res)
        return
      }

      throw new Error(res.message)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Form onSubmit={handleSubmit(addUser)}>
      <InputWrapper>
        <Input
          type="text"
          required
          placeholder="Name"
          {...register('name', {
            required: 'Name is required.',
          })}
        />
        {errors.name && <ErrorMessage>{`${errors.name.message}`}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <Input type="text" required placeholder="Email" {...register('email', validation.email)} />
        {errors.email && <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>}
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

      <InputWrapper>
        <Input
          type="password"
          required
          placeholder="Confirm Password"
          {...register('passwordConfirmation', {
            required: 'Password confirmation is required.',
            validate: passwordConfirmation =>
              passwordConfirmation === getValues('password') ||
              'Password confirmation needs to match the previously entered password.',
          })}
        />
        {errors.passwordConfirmation && (
          <ErrorMessage>{`${errors.passwordConfirmation.message}`}</ErrorMessage>
        )}
      </InputWrapper>

      <Button type="submit" disabled={isSubmitting}>
        Add user
      </Button>
    </Form>
  )
}
