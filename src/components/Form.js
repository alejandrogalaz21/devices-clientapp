import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

function Form({ initialType, initialSystemName, initialHddCapacity, ...props }) {
  const [error, setError] = useState(false)
  const [type, setType] = useState('')
  const [system_name, set_system_name] = useState('')
  const [hdd_capacity, set_hdd_capacity] = useState('')
  const history = useHistory()

  useEffect(() => {
    setType(initialType)
    set_system_name(initialSystemName)
    set_hdd_capacity(initialHddCapacity)
  }, [initialType, initialSystemName, initialHddCapacity])

  function handleOnSubmit(event) {
    event.preventDefault()
    if (type === '' || system_name === '' || hdd_capacity === '') {
      setError(true)
      return
    }
    setError(false)
    const values = { type, system_name, hdd_capacity }
    props.submit(values)
    return
  }

  function handleOnclickBack() {
    history.push('/')
  }

  return (
    <form onSubmit={handleOnSubmit} className='w-full max-w-lg mx-auto bg-white'>
      {error && <h2 style={{ color: 'red' }}>Require All Fields</h2>}

      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label
            htmlFor='system_name'
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
            System Name *
          </label>
        </div>
        <div className='md:w-2/3'>
          <input
            className='input'
            type='text'
            id='system_name'
            name='system_name'
            onChange={e => set_system_name(e.target.value)}
            value={system_name}
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          />
        </div>
      </div>

      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label
            htmlFor='type'
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
            Type *
          </label>
        </div>
        <div className='md:w-2/3'>
          <select
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            id='type'
            name='type'
            value={type}
            onChange={e => setType(e.target.value)}>
            <option value=''>Select Type</option>
            <option value='WINDOWS_WORKSTATION'>WINDOWS_WORKSTATION</option>
            <option value='WINDOWS_SERVER'>WINDOWS_SERVER</option>
            <option value='Mac'>Mac</option>
          </select>
        </div>
      </div>

      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label
            htmlFor='hdd_capacity'
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
            HDD Capacity (GB) *
          </label>
        </div>
        <div className='md:w-2/3'>
          <input
            type='number'
            id='hdd_capacity'
            name='lastname'
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            min={1}
            value={hdd_capacity}
            onChange={e => set_hdd_capacity(e.target.value)}
          />
        </div>
      </div>

      <div className='flex justify-end'>
        <button
          className='shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          onClick={handleOnclickBack}>
          Go Back
        </button>
        <button
          className='shadow bg-purple-500 ml-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          type='submit'>
          Submit
        </button>
      </div>
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
  initialHddCapacity: ''
}

export default Form
