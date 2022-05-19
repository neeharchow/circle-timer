import "./App.css"

import TaskClock from "./components/TaskClock"

function App() {
  return (
    <div className="App">
      <TaskClock startTime={600}></TaskClock>
    </div>
  )
}

export default App
