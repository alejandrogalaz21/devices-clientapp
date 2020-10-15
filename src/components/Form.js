import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Form({initialType, initialSystemName, initialHddCapacity, ...props}) {

  const [error, setError] = useState(false)
  const [type, setType] = useState('')
  const [system_name, set_system_name] = useState('')
  const [hdd_capacity, set_hdd_capacity] = useState('')

  useEffect(() => {
    setType(initialType)
    set_system_name(initialSystemName)
    set_hdd_capacity(initialHddCapacity)
  }, [initialType, initialSystemName,initialHddCapacity])

  function handleOnSubmit(event) {
    event.preventDefault()
    if (type === '' || system_name === '' || hdd_capacity === '' ) {
      setError(true)
      return
    }
    setError(false)
    const values = {type,system_name,hdd_capacity}
    props.submit(values)
    return 
  }

  return (
    <form onSubmit={handleOnSubmit} className='form-container'>

      {error && <h2 style={{color: 'red'}}>Require All Fields</h2>}

      <label htmlFor="system_name">System Name *</label>
      <input className='input' 
        type="text" 
        id="system_name" 
        name="system_name"
        onChange={e =>  set_system_name(e.target.value)}
        value={system_name}
      />

      <label htmlFor="type">Type *</label>
      <select className='input' id="type" name="type"
        value={type}
        onChange={e =>  setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="WINDOWS_WORKSTATION">WINDOWS_WORKSTATION</option>
        <option value="WINDOWS_SERVER">WINDOWS_SERVER</option>
        <option value="Mac">Mac</option>
      </select>

      <label htmlFor="hdd_capacity">HDD Capacity (GB) *</label>
      <input
        type="number"
        id="hdd_capacity"
        name="lastname"
        className='input'
        min={1}
        value={hdd_capacity}
        onChange={e =>  set_hdd_capacity(e.target.value)}
      />

      <button className='btn-submit' type='submit'>Submit</button>
    </form>
  )
}

Form.propTypes = {
  initialType: PropTypes.string, 
  initialSystemName: PropTypes.string, 
  initialHddCapacity: PropTypes.string,
  submit: PropTypes.func.isRequired
}

Form.defaultProps = {
  initialType: '', 
  initialSystemName: '', 
  initialHddCapacity: '',
}


export default Form
