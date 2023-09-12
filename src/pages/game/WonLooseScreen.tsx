import { useLocation } from "react-router-dom"
import style from "./styles.module.scss"

const WonLooseScreen = () => {
  const location = useLocation()
  console.log(location.state)

  return (
    <div className={style.divWonLooseScreen}>
      {location.state.Name} won the game
    </div>
  )
}

export default WonLooseScreen
