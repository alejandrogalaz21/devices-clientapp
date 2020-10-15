import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Form from './Form'
import axios from 'axios'

function Update() {
  const { id } = useParams()
  const history = useHistory()

  const [initialValues, setInitialValues] = useState({})

  useEffect(() => {
    async function request(id) {
      const result = await axios.get(`/devices/${id}`)
      setInitialValues(result.data)
    }
    request(id)
  }, [id])

  async function handleOnSubmit(values) {
    await axios.put(`/devices/${id}`, values)
    history.push('/')
  }

  return (
    <div className='flex items-center bg-white h-screen'>
      <div className='flex-1 text-gray-700 text-center px-4 py-2 m-2'>
        <Form
          submit={handleOnSubmit}
          initialSystemName={initialValues.system_name}
          initialHddCapacity={initialValues.hdd_capacity}
          initialType={initialValues.type}
        />
      </div>
    </div>
  )
}

export default Update
