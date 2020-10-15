import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/update/:id',
    component: Update
  },
]
