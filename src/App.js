import React from 'react'
import Board from './Board'

function App() {

  return (
    <main className='page'>
      <header className='header'>
        <h1>scoreboard</h1>
      </header>
      <div className='boards-container'>
       <Board scoreBoard={1}/>
       <Board scoreBoard={2}/>
       <Board scoreBoard={3}/>
      </div>
      <footer className='footer'>
        Designed By <a href='https://github.com/nahuelpairola'>NAP</a>
      </footer>
    </main>
  )
}

export default App;
