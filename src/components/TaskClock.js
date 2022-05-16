import styled from "styled-components"

import { useTimer } from "reactjs-countdown-hook"
import { useEffect } from "react"

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

  const radius = 300
  const timeLeft = counter
  const totalTime = props.startTime

  function handleTimerFinish() {
    alert("times up!")
  }

  useEffect(() => {
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")

    ctx.beginPath()
    ctx.arc(0, 0, radius, 0, 2.0 * (timeLeft / totalTime) * Math.pi)
  }, [timeLeft, totalTime])

  // const getTimeRemaining = (t) => {
  //   const total = Date.parse(t) - Date.parse(new Date())
  //   const seconds = Math.floor((total / 1000) % 60)
  //   const minutes = Math.floor((total / 1000 / 60) % 60)
  //   const hours = Math.floor(((total / 1000) * 60 * 60) % 24)
  //   return {
  //     total,
  //     hours,
  //     minutes,
  //     seconds,
  //   }
  // }

  // const startTimer = (t) => {
  //   let { total, hours, minutes, seconds } = getTimeRemaining(t)
  //   if (total >= 0 && !isPaused) {
  //     // update the timer
  //     // check if less than 10 then we need to
  //     // add '0' at the begining of the variable
  //     setDisplayTime(
  //       (hours > 9 ? hours : "0" + hours) +
  //         ":" +
  //         (minutes > 9 ? minutes : "0" + minutes) +
  //         ":" +
  //         (seconds > 9 ? seconds : "0" + seconds)
  //     )
  //   } else {

  //   }
  // }

  // const clearTimer = (t) => {
  //   // If you adjust it you should also need to
  //   // adjust the Endtime formula we are about
  //   // to code next
  //   setDisplayTime("00:00:00")

  //   // If you try to remove this line the
  //   // updating of timer Variable will be
  //   // after 1000ms or 1sec
  //   if (Ref.current) clearInterval(Ref.current)
  //   const id = setInterval(() => {
  //     startTimer(t)
  //   }, 1000)
  //   Ref.current = id
  // }

  // const getDeadTime = () => {
  //   let deadline = new Date()

  //   // This is where you need to adjust if
  //   // you entend to add more time
  //   deadline.setSeconds(deadline.getSeconds() + 600)
  //   return deadline
  // }

  // useEffect(() => {
  //   clearTimer(getDeadTime())
  // }, [])

  // const onClickReset = () => {
  //   clearTimer(getDeadTime())
  // }

  return (
    <div>
      <Face id="c" rad={radius.toString() + "px"}>
        <div>{`${minutes} : ${seconds}`}</div>
        <button onClick={() => (isActive ? pause() : resume())}>Pause</button>
      </Face>
      <canvas id="face" width={"300px"} height={"400px"}></canvas>
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
