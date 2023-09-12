import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// Set Points: 10 to see WonLooseScreen
const playerOne = { Name: "Tiny", Points: 8 }
const playerTwo = { Name: "Bigy", Points: 9 }

const WonLooseState = () => {
  const [playerOnePoints, setPlayerOnePoints] = useState(0)
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    setPlayerOnePoints(playerOne.Points)
    setPlayerTwoPoints(playerTwo.Points)
  }, [])

  useEffect(() => {
    if (playerOnePoints == 10) {
      navigate("/WonLooseScreen", { replace: true, state: playerOne })
    }

    if (playerTwoPoints == 10) {
      navigate("/WonLooseScreen", { replace: true, state: playerTwo })
    }
  }, [playerOnePoints, playerTwoPoints])

  return (
    <div>
      Score: {playerOne.Name} - {playerOnePoints} : {playerTwo.Name} -{" "}
      {playerTwoPoints}
    </div>
  )
}

export default WonLooseState
