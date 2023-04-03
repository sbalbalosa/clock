import './App.css'
import AnalogClock from './components/AnalogClock'
import DigitalClock from './components/DigitalClock'
import ClockProvider from "./components/ClockProvider"

function App() {

  return (
    <div className="container">
      <div className="container__content">
        <ClockProvider>
          <AnalogClock />
          <DigitalClock />
        </ClockProvider>
      </div>
    </div>
  )
}

export default App
