import styled from "styled-components"
import TaskClock from "./components/TaskClock"

import { useState } from "react"

function App() {
  const colors = [
    "#BAA6A5",
    "#AD949E",
    "#97859B",
    "#767A97",
    "#4D718C",
    "#1C6777",
  ]

  // const startTimes = [5700, 4534, 3453, 7700]
  const startTimes = [5700, 9453, 4534, 3453, 3403, 7700]
  const [activeTimer, setActiveTimer] = useState(1)

  const radius = 120
  const center = 400
  // todo: create a function that can calculate the radii of the circles and pass it in

  return (
    <AppContainer>
      <CircleContainer>
        {startTimes.map((t, index) => {
          return (
            <TaskClock
              startTime={t}
              index={index + 1}
              count={startTimes.length}
              radius={radius}
              center={center}
              color={colors[index]}
              activeTimer={activeTimer}
              setActiveTimer={setActiveTimer}
            ></TaskClock>
          )
        })}
      </CircleContainer>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: scroll;
`
const CircleContainer = styled.div`
  position: relative;
  height: 800px;
  width: 800px;
  display: flex;
  margin: auto auto;
  transform: rotateZ(-90deg);
`
