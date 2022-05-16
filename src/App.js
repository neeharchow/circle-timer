import "./App.css"
// import { add } from "data-fns"

import TaskClock from "./components/TaskClock"

function App() {
  // const futureDate = add(new Date(), {
  //   hours: 2,
  //   minutes: 30,
  // })

  return (
    <div className="App">
      <TaskClock startTime={1000}></TaskClock>
    </div>
  )
}

export default App
