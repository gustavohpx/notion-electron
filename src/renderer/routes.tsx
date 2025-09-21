import { Router } from '../lib/electron-router-dom'
import { Route } from 'react-router-dom'
import { Blank } from './src/pages/blank'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
        </>
      }
    />
  )
}
