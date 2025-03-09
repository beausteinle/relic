import logo from './logo.svg'
import './App.css'
import { Button } from './components/button/Button'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          onClick={() => window.alert('Clicked!')}
          size="large"
          text="Click Me!"
        />
      </header>
    </div>
  )
}
