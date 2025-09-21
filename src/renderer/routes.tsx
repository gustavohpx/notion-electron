import { Router } from '../lib/electron-router-dom'
import { Route } from 'react-router-dom'
import { Blank } from './src/pages/blank'
import { Document } from './src/pages/document'
import { DefaultLayout } from './src/pages/layouts/default'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path='/' element={<DefaultLayout />} >
            <Route path="/" element={<Blank />} />
            <Route path="/documents" element={<Document />} />
          </Route>
        </>
      }
    />
  )
}
