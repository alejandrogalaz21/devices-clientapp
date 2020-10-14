import React from 'react'
import PropTypes from 'prop-types'

function Error({ message }) {
  return <p className='alert alert-danger error'>{message}</p>
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error
