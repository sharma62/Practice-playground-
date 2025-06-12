import React from 'react'
import './App.css'
import Form from './components/Form'
import { Provider } from 'react-redux'
import {store} from './Redux/Store/store';
import Data from './components/Data';


function App() {

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:20 }} >
      <Provider store={store}>
        <Form />
        <Data/>
      </Provider>
    </div >
  )
}

export default App
