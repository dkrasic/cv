import { FieldValues, useForm } from 'react-hook-form'
import { getMillisFromDateString } from '../../../utils'
import { Button, ErrorMessage, Form, Input, InputWrapper } from '../../../styles/common'
import { Position } from '../../ExperienceItem/types'

// ** Props **
interface AddPositionProps {
  handleSubmitInParent: (position: Position) => void
}

export const AddPositionForm = ({}: AddPositionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm()

  const addPosition = (data: FieldValues) => {
    console.log('data: ', data)
    // const newPosition: Position = {
    //   companyName: data.get('companyName'),
    // } as Position

    // console.log('newPosition: ', newPosition)

    // handleSubmitInParent(newPosition);
  }

  return (
    <Form onSubmit={handleSubmit(addPosition)}>
      <InputWrapper>
        <Input
          type="text"
          required
          placeholder="Title"
          {...register('title', {
            required: 'Position title is required.',
          })}
        />
        {errors.title && <ErrorMessage>{`${errors.title.message}`}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Input type="text" placeholder="Description" {...register('description')} />
      </InputWrapper>

      <InputWrapper>
        <Input
          type="date"
          required
          placeholder="Start date"
          {...register('startDate', {
            required: 'Start date is required.',
          })}
        />
        {errors.startDate && <ErrorMessage>{`${errors.startDate.message}`}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Input
          type="date"
          required
          placeholder="End date"
          {...register('endDate', {
            required: 'End date is required.',
            validate: endDateValue =>
              getMillisFromDateString(endDateValue) >
                getMillisFromDateString(getValues('startDate')) ||
              'End date has to be after the start date',
          })}
        />
        {errors.endDate && <ErrorMessage>{`${errors.endDate.message}`}</ErrorMessage>}
      </InputWrapper>

      <Button type="submit" disabled={isSubmitting}>
        Add position
      </Button>
    </Form>
  )
}

// export interface Position {
//     title: string
//     description: string
//     startDate: Date
//     endDate: Date
//   }
