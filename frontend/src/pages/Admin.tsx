import { Section } from '../components/Section'
import { AddExperienceForm } from '../components/forms'

export const Admin = () => {
  return (
    <div>
      <ul>
        <h1>Todo:</h1>
        <li>Enable admin to add other admin users</li>
        <li>Enable admin to add experiences/positions</li>
      </ul>

      <Section title="Add Experience">
        <AddExperienceForm />
      </Section>
    </div>
  )
}
