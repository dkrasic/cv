import { Section } from '../components/Section'
import { AddExperienceForm, AddUserForm } from '../components/forms'

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

      <Section title="Add user">
        <AddUserForm />
      </Section>
    </div>
  )
}
