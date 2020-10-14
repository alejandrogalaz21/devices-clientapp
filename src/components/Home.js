import React, { useState } from 'react'
import Loading from './Loading'

const Home = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <div className='menu'>
        <ul className='list-inline'>
          <li>
            <button className='' onClick={() => setLoading(!loading)}>
              Loading
            </button>
          </li>
          <li>
            <button className='' onClick={() => setError(!error)}>
              Error
            </button>
          </li>
        </ul>
      </div>
      {loading && <Loading />}
      {error && <h1>Error !</h1>}
    </div>
  )
}

export default Home
