import { Provider } from 'react-redux'
import { store } from './redux/Auth/store'


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </StrictMode>,
)