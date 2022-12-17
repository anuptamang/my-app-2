import { ReactElement } from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Wrapper } from '../../components/UI/Wrapper'
import Main from '../../components/UI/Wrapper/Main'
import PageHolder from '../../components/UI/Wrapper/PageHolder'

type Iprops = {
  children?: ReactElement
}

const General = ({ children }: Iprops) => {
  return (
    <>
      <Wrapper>
        <Header />
        <PageHolder>
          <Main>{children ? children : <Outlet />}</Main>
        </PageHolder>
        <Footer />
        <ToastContainer />
      </Wrapper>
    </>
  )
}

export default General
