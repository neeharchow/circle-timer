import styled from "styled-components"
import TaskClock from "./components/TaskClock"

import { useState } from "react"

function App() {
  const colors = [
    "rgb(15, 30, 90,  .8)",
    "rgb(15, 50, 90,  .8)",
    "rgb(15, 70, 90,  .8)",
    "rgb(15, 90, 90,  .8)",
    "rgb(15, 110, 90, .8)",
    "rgb(15, 130, 90, .8)",
    "rgb(15, 150, 90, .8)",
    "rgb(15, 170, 90, .8)",
    // "rgb(186, 166, 165, 1)",
    // "rgb(173, 148, 158, 1)",
    // "rgb(151, 133, 155, 1)",
    // "rgb(118, 122, 151, 1)",
    // "rgb(77, 113, 140, 1)",
    // "rgb(28, 103, 119, 1)",
    // "rgb(28, 103, 140, 1)",
    // "rgb(28, 103, 170, 1)",
  ]

  const startTimes = [5700, 9453, 4534, 3453, 456, 23, 76, 135]
  const [activeTimer, setActiveTimer] = useState(1)

  const radius = 80
  const center = 400
  // todo: create a function that can calculate the radii of the circles and pass it in

  return (
    <AppContainer>
      <CircleContainer
        modHeight={(center * 2).toString() + "px"}
        modWidth={(center * 2).toString() + "px"}
      >
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
  height: ${(props) => props.modWidth};
  width: ${(props) => props.modHeight};
  display: flex;
  margin: auto auto;
  transform: rotateZ(-90deg);
`
