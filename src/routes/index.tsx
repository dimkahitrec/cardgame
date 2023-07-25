import { createBrowserRouter } from 'react-router-dom'
import { GamePage } from '../pages/game/GamePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GamePage />
  }
])

export {
  router
}
