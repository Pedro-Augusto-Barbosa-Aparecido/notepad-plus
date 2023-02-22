import { Header } from '../../components/Header'
import { Toolbar } from '../../components/Toolbar'

import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
