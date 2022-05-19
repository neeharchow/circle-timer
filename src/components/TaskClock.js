import styled from "styled-components"

import { useTimer } from "reactjs-countdown-hook"
import { useEffect, useState } from "react"

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

// import { intervalToDuration, isBefore } from "date-fns"

const TaskClock = (props) => {
  const {
    isActive,
    counter,
    seconds,
    minutes,
    hours,
    days,
    pause,
    resume,
    reset,
  } = useTimer(props.startTime, handleTimerFinish)

  const [percentage, setPercentage] = useState(100)

  const radius = 500

  function handleTimerFinish() {
    alert("times up!")
  }

  useEffect(() => {
    setPercentage(100 * (counter / props.startTime))
  }, [counter, props.startTime, percentage])

  return (
    <div>
      <Face id="c" rad={radius.toString() + "px"}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={30}
          styles={buildStyles({
            strokeLinecap: "butt",
          })}
        ></CircularProgressbar>
        <div>{`${minutes} : ${seconds}`}</div>
        <button onClick={() => (isActive ? pause() : resume())}>Pause</button>
      </Face>
      {/* <canvas id="face" width={"300px"} height={"400px"}></canvas> */}
    </div>
  )
}

export default TaskClock

const Face = styled.div`
  display: flex;
  width: ${(props) => props.rad};
  height: ${(props) => props.rad};
  border-radius: ${(props) => props.rad};
  // background-color: green;
  border-color: green;
  border-style: solid;

  margin: auto;
`

// Two ways to calculate time:
// (1)
//  - get interval time
//  - set future time to now + interval time
//  - continously subtract so that future time - interval time is set to the timer.

// (2)
//  - update a timer function every second
