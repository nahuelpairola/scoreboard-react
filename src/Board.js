import React, { useState, useEffect } from 'react'
import Team from './Team'
import Winner from './ShowWinner.js'
import ConfigBoard from './ConfigBoard'
import Timer from './Timer'
import { BiCog } from 'react-icons/bi'
import { BiTime } from 'react-icons/bi'

const Board = ({scoreBoard}) => {
  const [maxPoints, setMaxPoints] = useState(12) // 12 as default max points
  const [winner, setWinner] = useState('')

  const [localName, setLocalName] = useState('local')
  const [guestName, setGuestName] = useState('visitante')
  const [localPoints, setLocalPoints] = useState(0)
  const [guestPoints, setGuestPoints] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)

  const [showWinner, setShowWinner] = useState(false)
  const [isConfigOpen, setIsConfigOpen] = useState(false)
  const [isTimerOpen, setTimerOpen] = useState(false)

  const checkPoints = (points) => {
    if (points >= maxPoints) return maxPoints
    if (points <= 0) return 0
    return points
  }
  const incrementLocalPoints = () => {
    let actualPoints = localPoints
    actualPoints += 1
    setLocalPoints(checkPoints(actualPoints))
  }
  const incrementGuestPoints = () => {
    let actualPoints = guestPoints
    actualPoints += 1
    setGuestPoints(checkPoints(actualPoints))
  }
  const decrementLocalPoints = () => {
    let actualPoints = localPoints
    actualPoints -= 1
    setLocalPoints(checkPoints(actualPoints))
  }
  const decrementGuestPoints = () => {
    let actualPoints = guestPoints
    actualPoints -= 1
    setGuestPoints(checkPoints(actualPoints))
  }
  const resetLocalPoints = () => {
    setLocalPoints(0)
  }
  const resetGuestPoints = () => {
    setGuestPoints(0)
  }

  useEffect(() => {
    if (localPoints >= maxPoints) {
      setWinner(localName)
      setShowWinner(true)
    }
    if (guestPoints >= maxPoints) {
      setWinner(guestName)
      setShowWinner(true)
    }
    if(localPoints===0 && guestPoints===0) setGameRunning(true)
    else setGameRunning(false)
  }, [localPoints, guestPoints, maxPoints])

  const closeModal = () => {
    setWinner('')
    resetLocalPoints()
    resetGuestPoints()
    setGameRunning(false)
    setShowWinner(false)
  }

  return (
    <div className='single-board'>
      { showWinner && <Winner winner={winner} closeModal={closeModal}/> }
      <div className='board-header'>
        <h2>cancha {scoreBoard}</h2>  
        <div className='btn-container'>
          {isConfigOpen || <button onClick={()=>{setTimerOpen(!isTimerOpen)}} className='btn btn-time' title='Tiempo para Práctica'><BiTime/></button>}
          {isTimerOpen || <button onClick={()=>{ if(gameRunning) setIsConfigOpen(!isConfigOpen) }} className='btn btn-config' title='Panel de configuración'><BiCog/></button>}
        </div>
      </div>
      { isConfigOpen && <ConfigBoard setLocalName={setLocalName} setGuestName={setGuestName} setMaxPoints={setMaxPoints}/> }
      { isTimerOpen && <Timer maxMinutes={5}/> }
      <Team
        team={{ name: localName, points: localPoints }}
        incrementPoints={incrementLocalPoints}
        decrementPoints={decrementLocalPoints}
        resetPoints={resetLocalPoints} />
      <Team 
        team={{ name: guestName, points: guestPoints }}
        incrementPoints={incrementGuestPoints}
        decrementPoints={decrementGuestPoints}
        resetPoints={resetGuestPoints} />
    </div>
  )
}

export default Board
