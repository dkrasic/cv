import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: 0;
`

export const Button = styled.button`
  padding: 5px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.deepOrange};
`

export const NestedFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 20px;
`

export const NestedFormTitle = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.orangeYellow};
`

export const FormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
`

export const FormListItem = styled.li``
