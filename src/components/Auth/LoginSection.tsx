import { Container, Typography } from '@mui/material'
import { BtnLoading } from '../UI/BtnLoading'

type Iprops = {
  handleSubmit: (event: { preventDefault: () => void }) => void
  loading: boolean
}

const LoginSection = ({ handleSubmit, loading }: Iprops) => {
  return (
    <Container>
      <Typography variant='h1'>Login</Typography>
      <BtnLoading
        variant='contained'
        loading={loading}
        loadingPosition='center'
        onClick={handleSubmit}
      >
        Login
      </BtnLoading>
    </Container>
  )
}

export default LoginSection
