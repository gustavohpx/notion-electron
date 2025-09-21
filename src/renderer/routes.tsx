import { Router } from '../lib/electron-router-dom'
import { Route } from 'react-router-dom'
import { Blank } from './src/pages/blank'
import { Document } from './src/pages/document'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
          <Route path="/documents" element={<Document />} />
        </>
      }
    />
  )
}
