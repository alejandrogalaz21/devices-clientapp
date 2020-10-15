import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Item({ id, system_name, type, hdd_capacity }) {
  return (
    <div className='md:flex w-full border-solid mb-4 bg-gray-200 p-3'>
      <div className='md:flex-shrink-0 border-3 border-gray-500'></div>
      <div className='mt-4 md:mt-0 md:ml-6'>
        <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold'>
          {system_name}
        </div>
        <p className='mt-2 text-gray-600'>{type}</p>
        <p className='mt-2 text-gray-600'>{hdd_capacity} GB</p>
        <Link
          to={`/update/${id}`}
          className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'>
          Edit
        </Link>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  system_name: PropTypes.string,
  type: PropTypes.string,
  hdd_capacity: PropTypes.string
}

export default Item
