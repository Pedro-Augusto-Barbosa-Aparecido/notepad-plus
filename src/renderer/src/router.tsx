import { Router, Route } from 'electron-router-dom'
import { Blank } from './pages/Blank'
import { Documents } from './pages/Documents'
import { DefaultLayout } from './pages/layouts/default'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Blank />} />
            <Route path="/documents" element={<Documents />} />
          </Route>
        </>
      }
    />
  )
}
