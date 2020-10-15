import React from 'react'
import Form from './Form'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Create() {
  const history = useHistory()

  async function handleOnSubmit(values) {
    await axios.post('/devices', values)
    history.push('/')
  }
  return (
    <div className='flex items-center bg-white h-screen'>
      <div className='flex-1 text-gray-700 text-center px-4 py-2 m-2'>
        <Form submit={handleOnSubmit} />
      </div>
    </div>
  )
}

export default Create
