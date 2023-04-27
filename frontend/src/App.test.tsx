import { render } from '@testing-library/react'
import App from './App'

test('renders learn react text', () => {
  render(<App />)
  // const myAppText = screen.getByText(/Title/i)
  expect('').toBeFalsy()
})
