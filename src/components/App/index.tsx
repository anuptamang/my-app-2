import { Suspense, lazy } from 'react'
import Loading from '../UI/Loading'
import ScrollToTop from '../UI/ScrollToTop'

const AppRouter = lazy(() => import('../../routes/AppRouter'))

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App
