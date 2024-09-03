import { FieldValues, useForm } from 'react-hook-form'
import { getFormattedDate, getMillisFromDateString } from '../../../utils'
import {
  Button,
  ErrorMessage,
  Form,
  FormList,
  FormListItem,
  Input,
  InputWrapper,
  NestedFormTitle,
  NestedFormWrapper,
} from '../../../styles/common'
import { AddPositionForm } from '../AddPosition/AddPosition'
import { useState } from 'react'
import { Position } from '../../ExperienceItem/types'

export const AddExperienceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm()

  const [isPositionFormVisible, setIsPositionFormVisible] = useState(false)
  const [positions, setPositions] = useState<Position[]>([])

  const addExperience = (data: FieldValues) => {
    console.log('data: ', data)
    // const newExperience: Experience = {
    //   companyName: formData.get('companyName'),
    // } as Experience

    // console.log('experience: ', newExperience)
  }

  return (
    <Form onSubmit={handleSubmit(addExperience)}>
      <InputWrapper>
        <Input
          type="text"
          required
          placeholder="Company name"
          {...register('companyName', {
            required: 'Company name is required.',
          })}
        />
        {errors.companyName && <ErrorMessage>{`${errors.companyName.message}`}</ErrorMessage>}
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

      <NestedFormWrapper>
        <NestedFormTitle>Positions</NestedFormTitle>
        {positions.length > 0 && (
          <FormList>
            {positions.map(position => (
              <FormListItem>
                `${position.title} | ${getFormattedDate(position.startDate)} - $
                {getFormattedDate(position.endDate)}`
              </FormListItem>
            ))}
          </FormList>
        )}

        {isPositionFormVisible && (
          <AddPositionForm
            handleSubmitInParent={(position: Position) => setPositions([...positions, position])}
          />
        )}
        {!isPositionFormVisible && (
          <Button onClick={() => setIsPositionFormVisible(true)}>+</Button>
        )}
      </NestedFormWrapper>

      <Button type="submit" disabled={isSubmitting}>
        Add experience
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

//   export interface Project {
//     client: string
//     title: string
//     description: string
//     startDate: Date
//     endDate: Date
//     techStack: string[] // can be changed into union type
//   }

//   export interface Experience {
//     companyName: string
//     positions: Position[]
//     projects: Project[]
//     startDate: Date
//     endDate: Date
//   }
