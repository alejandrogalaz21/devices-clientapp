import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Form from './Form'
import axios from 'axios'

function Update(props) {
  const { id } = useParams()

  const [initialValues, setInitialValues] = useState({})

  useEffect(() => {
    async function request(id) {
      const result = await axios.get(`/devices/${id}`)
      setInitialValues(result.data)
    }
    request(id)
    }, [id])

  
  async function handleOnSubmit(values){
    await axios.put(`/devices/${id}`, values)
  }
  
  return (
    <Form 
      submit={handleOnSubmit} 
      initialSystemName={initialValues.system_name} 
      initialHddCapacity={initialValues.hdd_capacity}
      initialType={initialValues.type} />
  )
}

Update.propTypes = {

}

export default Update
