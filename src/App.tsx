import logo from './logo.svg'
import './App.css'
import { Button } from './components/alpha/button/Button'
import { Input } from './components/alpha/input/input'
import Select, { SelectOption } from './components/alpha/select/select'
import { useState } from 'react'

export const App = () => {
  const [someValue, setSomeValue] = useState('')

  const sampleOptions: SelectOption[] = [
    {
      label: 'Test 1',
      value: 1,
    },
    {
      label: 'Test 2',
      value: 2,
    },
  ]

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.alert(`Changed to: ${e.target.value}`)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSomeValue(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {someValue}
        <Input onChange={onChangeInput} />
        <Select options={sampleOptions} onChange={onChangeHandler} />
        <Button
          onClick={() => window.alert('Clicked!')}
          size="large"
          text="Click Me!"
        />
      </header>
    </div>
  )
}
