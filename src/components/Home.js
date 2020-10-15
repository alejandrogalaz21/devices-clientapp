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
    <div className='flex justify-center bg-white h-screen flex-col mx-5'>
      <div className='flex justify-center'>
        <div className='flex-1 text-gray-700 text-center px-4 py-2 m-2 mb-5'>
          <select
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            onChange={e => setSearch(e.target.value)}>
            <option value=''>All</option>
            <option value='WINDOWS_WORKSTATION'>WINDOWS_WORKSTATION</option>
            <option value='WINDOWS_SERVER'>WINDOWS_SERVER</option>
            <option value='Mac'>Mac</option>
          </select>

          <select
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-2  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            onChange={e => sortArray(e.target.value)}>
            <option value='alphabetically'>System Name alphabetically</option>
            <option value='ascending'>HDD ascending</option>
            <option value='descending'>HDD descending</option>
          </select>
          <Link
            to={`/create`}
            className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
            Add
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {data
          .filter(d => d.type.includes(search))
          .map(d => (
            <Item key={d.id} {...d} />
          ))}
      </div>
    </div>
  )
}

export default Home
