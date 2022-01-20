import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count => count + 1)
    const decrement = () => setCount(count => count - 1)

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1>Hello World!</h1>
                <p>{count}</p>
                <div className='App-actions'>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            </header>
        </div>
    )
}

export default App
