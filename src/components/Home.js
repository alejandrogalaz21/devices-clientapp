import React, { useState, useEffect } from 'react'
import Item from './Item'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [list, setList] = useState([])
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function request() {
      const result = await axios.get('devices')
      setData(result.data)
      setList(result.data)
    }
    request()
  }, [])

  const sortArray = type => {
    if (type === 'ascending') {
      const sorted = [...list].sort((a, b) => b.hdd_capacity - a.hdd_capacity)
      setData(sorted)
      return
    }
    if (type === 'descending') {
      const sorted = [...list].sort((a, b) => a.hdd_capacity - b.hdd_capacity)
      setData(sorted)
      return
    }
    if (type === 'alphabetically') {
      const sorted = [...list].sort((a, b) => a.system_name.localeCompare(b.system_name))
      setData(sorted)
      return
    }
  }

  const handle = values => {
    debugger
  }

  return (
    <>
      <div className='menu'>
        <Link to={`/create`}>Add</Link>
        <select onChange={e => setSearch(e.target.value)}>
          <option value=''>All</option>
          <option value='WINDOWS_WORKSTATION'>WINDOWS_WORKSTATION</option>
          <option value='WINDOWS_SERVER'>WINDOWS_SERVER</option>
          <option value='Mac'>Mac</option>
        </select>

        <select onChange={e => sortArray(e.target.value)}>
          <option value='alphabetically'>System Name alphabetically</option>
          <option value='ascending'>HDD ascending</option>
          <option value='descending'>HDD descending</option>
        </select>
      </div>

      <div className='results'>
        {data
          .filter(d => d.type.includes(search))
          .map(d => (
            <Item key={d.id} {...d} />
          ))}
      </div>
    </>
  )
}

export default Home
