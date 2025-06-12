import React from 'react'
import './App.css'
//basic CRUD
import Form from './components/Form'
// CRUD Context
import { FormContextProvider } from './components/CRUDContextApi/Context/Context'
import InputForm from './components/CRUDContextApi/InputForm'
import Records from './components/CRUDContextApi/Records'
//redux
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store'
//   components
import Input from './Redux/Components/Input'
import ShowData from './Redux/Components/ShowData'

function App() {

  return (
    <>
      {/*  CRUD Basic  */}
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',gap: '100px' }}>
        <Form />
      </div>
      
      {/* CRUDContext */}
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '100px' }}>
        <FormContextProvider>
          <InputForm />
          <Records />
        </FormContextProvider>
      </div>

      {/* Redux */}
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '100px' }}>
        <Provider store={store}>
          <Input />
          <ShowData />
        </Provider>
      </div>
    </>
  )
}

export default App
