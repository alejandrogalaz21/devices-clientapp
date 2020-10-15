import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Item({ id, system_name, type, hdd_capacity }) {
  return (
    <div key={id} style={{ margin: '30px' }}>
      <div>{system_name}</div>
      <div>{type}</div>
      <div>{hdd_capacity} GB</div>
      <Link to={`/update/${id}`}>edit</Link>
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
