import styled from "styled-components"
import TaskClock from "./components/TaskClock"

import { useState } from "react"

function App() {
  const colors = [
    "rgb(15, 30, 90,  .55)",
    "rgb(15, 50, 90,  .55)",
    "rgb(15, 70, 90,  .55)",
    "rgb(15, 90, 90,  .55)",
    "rgb(15, 110, 90, .55)",
    "rgb(15, 130, 90, .55)",
    "rgb(15, 150, 90, .55)",
    "rgb(15, 170, 90, .55)",
    "rgb(15, 190, 90, .55)",
    "rgb(15, 210, 90, .55)",
    "rgb(15, 230, 90, .55)",
    "rgb(15, 250, 90, .55)",
    "rgb(35, 250, 90, .55)",
    "rgb(55, 250, 90, .55)",
  ]

  const taskData = [
    {
      taskTitle: "Work",
      startTime: 28800,
    },
    {
      taskTitle: "Exercise",
      startTime: 1800,
    },
    {
      taskTitle: "Read",
      startTime: 1800,
    },
    {
      taskTitle: "Meditate",
      startTime: 600,
    },
  ]

  const [activeTimer, setActiveTimer] = useState(1)

  const radius = 120
  const center = 390
  // todo: create a function that can calculate the radii of the circles and pass it in

  return (
    <AppContainer>
      <CircleContainer
        modHeight={(center * 2).toString() + "px"}
        modWidth={(center * 2).toString() + "px"}
      >
        {taskData.map((t, index) => {
          return (
            <TaskClock
              startTime={t.startTime}
              index={index + 1}
              count={taskData.length}
              radius={radius}
              center={center}
              color={colors[index]}
              activeTimer={activeTimer}
              setActiveTimer={setActiveTimer}
              taskTitle={t.taskTitle}
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
