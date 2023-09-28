import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <div className='
        text-3xl text-center
        m-10
      '>
          Student Info System
        </div>
        <div className="
        flex flex-col items-center h-screen    
      ">
          <App />
        </div>
      </div>
    </Provider>
  </React.StrictMode>,
)
