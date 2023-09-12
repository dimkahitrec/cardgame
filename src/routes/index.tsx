import { createBrowserRouter } from "react-router-dom"
import { GamePage } from "../pages/game/GamePage"
import WonLooseScreen from "../pages/game/WonLooseScreen"

const router = createBrowserRouter([
  {
    path: "/",
    element: <GamePage />,
  },
  {
    path: "/WonLooseScreen",
    element: <WonLooseScreen />,
  },
])

export { router }
