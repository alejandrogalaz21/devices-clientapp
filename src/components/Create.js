import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import axios from 'axios'

function Create(props) {
  async function handleOnSubmit(values){
   const result = await axios.post('/devices', values)
   console.log(result)
  }
  return (
    <Form submit={handleOnSubmit} />
  )
}

Create.propTypes = {

}

export default Create

