import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

function preventTabEvent() {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)
  }, [])

  const detectKeyDown = (e: any) => {
    if (e.key === "Tab") {
      e.preventDefault()
    }
  }
}

function preventDragNDrop() {
  useEffect(() => {
    document.addEventListener("dragstart", detectDrags, true)
  }, [])

  const detectDrags = (e: any) => {
    if (e) {
      e.preventDefault()
    }
  }
}

function preventPointers() {
  useEffect(() => {
    document.addEventListener("pointerdown", detectPointerDown, true)
  }, [])

  const detectPointerDown = (e: any) => {
    if (e) {
      e.preventDefault()
    }
  }
}

const WaitingScreen = () => {
  const [activePlayer, setActivePlayer] = useState("")
  // const [error, setError] = useState("")

  const API_URL = "https://"
  // activePlayerTest instead of url for test
  const activePlayerTest = "playerTwo"
  const playerOne = "playerOne"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const activePlayer = await res.json()
        setActivePlayer(activePlayer)
      } catch (error) {
        // setError(error.message)
      }
    }
    fetchData()
  }, [])

  if (String(activePlayerTest) !== String(playerOne)) {
    preventTabEvent()
    preventDragNDrop()
    preventPointers()

    return (
      <div>
        <div className={styles.loader}></div>
        Waiting other player turn
      </div>
    )
  }

  return <div></div>
}

export default WaitingScreen
