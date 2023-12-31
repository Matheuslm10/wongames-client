import Link from 'next/link'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue={email}
        disabled
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`}>
          <Button minimal size="medium" as="a">
            Reset password
          </Button>
        </Link>
        <Button size="large">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile
