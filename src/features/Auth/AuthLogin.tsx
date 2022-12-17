import { useNavigate } from 'react-router-dom'
import LoginSection from '../../components/Auth/LoginSection'
import { login } from '../../redux/auth/authAction'
import { authSelector } from '../../redux/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const AuthLogin = () => {
  const { loading } = useAppSelector(authSelector)
  let navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    dispatch(login({ username: 'kminchelle', password: '0lelplR' }, navigate))
  }

  return (
    <>
      <LoginSection handleSubmit={handleSubmit} loading={loading} />
    </>
  )
}

export default AuthLogin
